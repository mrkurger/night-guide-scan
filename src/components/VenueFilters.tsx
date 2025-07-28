import { useState } from "react";
import { VenueCategory, VENUE_CATEGORIES } from "@/data/venues";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, MapPin, SlidersHorizontal } from "lucide-react";

interface VenueFiltersProps {
  selectedCategories: VenueCategory[];
  selectedCities: string[];
  priceRange: [number, number];
  onCategoryChange: (categories: VenueCategory[]) => void;
  onCityChange: (cities: string[]) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onSearchChange: (search: string) => void;
}

const VenueFilters = ({
  selectedCategories,
  selectedCities,
  priceRange,
  onCategoryChange,
  onCityChange,
  onPriceRangeChange,
  onSearchChange
}: VenueFiltersProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const cities = ["Oslo", "Stockholm", "København", "Göteborg", "Malmö", "Bergen"];
  const priceLabels = ["€", "€€", "€€€", "€€€€"];

  const handleCategoryToggle = (category: VenueCategory) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    onCategoryChange(newCategories);
  };

  const handleCityToggle = (city: string) => {
    const newCities = selectedCities.includes(city)
      ? selectedCities.filter(c => c !== city)
      : [...selectedCities, city];
    onCityChange(newCities);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <div className="bg-card/50 border-b border-border/50 sticky top-[73px] z-40 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        {/* Search and Filter Toggle */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Søk etter navn, sted eller type..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 bg-background/50 border-border/50 focus:border-neon-pink/50"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="border-border/50 hover:border-neon-pink/50"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filtre
          </Button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="space-y-6 animate-fade-in">
            {/* Categories */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Kategorier</h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(VENUE_CATEGORIES).map(([key, category]) => (
                  <Badge
                    key={key}
                    variant={selectedCategories.includes(key as VenueCategory) ? "default" : "outline"}
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      selectedCategories.includes(key as VenueCategory)
                        ? `bg-${category.color} text-white border-${category.color}`
                        : `border-${category.color}/50 hover:bg-${category.color}/10`
                    }`}
                    onClick={() => handleCategoryToggle(key as VenueCategory)}
                  >
                    <span className="mr-1">{category.icon}</span>
                    {category.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Cities */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Byer</h3>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <Badge
                    key={city}
                    variant={selectedCities.includes(city) ? "default" : "outline"}
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      selectedCities.includes(city)
                        ? "bg-neon-turquoise text-white border-neon-turquoise"
                        : "border-neon-turquoise/50 hover:bg-neon-turquoise/10"
                    }`}
                    onClick={() => handleCityToggle(city)}
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    {city}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Prisnivå</h3>
              <div className="flex gap-2">
                {priceLabels.map((label, index) => (
                  <Badge
                    key={index}
                    variant={
                      priceRange[0] <= index + 1 && priceRange[1] >= index + 1
                        ? "default"
                        : "outline"
                    }
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      priceRange[0] <= index + 1 && priceRange[1] >= index + 1
                        ? "bg-neon-gold text-black border-neon-gold"
                        : "border-neon-gold/50 hover:bg-neon-gold/10"
                    }`}
                    onClick={() => {
                      if (priceRange[0] <= index + 1 && priceRange[1] >= index + 1) {
                        // Remove this price level
                        if (index + 1 === priceRange[0] && index + 1 === priceRange[1]) {
                          onPriceRangeChange([1, 4]); // Reset to all
                        } else if (index + 1 === priceRange[0]) {
                          onPriceRangeChange([index + 2, priceRange[1]]);
                        } else if (index + 1 === priceRange[1]) {
                          onPriceRangeChange([priceRange[0], index]);
                        }
                      } else {
                        // Add this price level
                        const newMin = Math.min(priceRange[0], index + 1);
                        const newMax = Math.max(priceRange[1], index + 1);
                        onPriceRangeChange([newMin, newMax]);
                      }
                    }}
                  >
                    {label}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Active Filters Count */}
            {(selectedCategories.length > 0 || selectedCities.length > 0 || searchTerm) && (
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-sm text-muted-foreground">
                  {selectedCategories.length + selectedCities.length + (searchTerm ? 1 : 0)} aktive filtre
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    onCategoryChange([]);
                    onCityChange([]);
                    onPriceRangeChange([1, 4]);
                    setSearchTerm("");
                    onSearchChange("");
                  }}
                  className="text-neon-pink hover:text-neon-pink/80"
                >
                  Nullstill alle
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VenueFilters;