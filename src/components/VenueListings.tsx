import { useState, useMemo } from "react";
import { Venue, VenueCategory, MOCK_VENUES } from "@/data/venues";
import VenueFilters from "./VenueFilters";
import VenueCard from "./VenueCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Grid, List, Map, TrendingUp, MapPin } from "lucide-react";

const VenueListings = () => {
  const [selectedCategories, setSelectedCategories] = useState<VenueCategory[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([1, 4]);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list" | "map">("grid");
  const [sortBy, setSortBy] = useState<"rating" | "price" | "distance" | "popularity">("rating");

  // Filter and sort venues
  const filteredVenues = useMemo(() => {
    let filtered = MOCK_VENUES.filter(venue => {
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(venue.category)) {
        return false;
      }
      
      // City filter
      if (selectedCities.length > 0 && !selectedCities.includes(venue.city)) {
        return false;
      }
      
      // Price range filter
      if (venue.priceLevel < priceRange[0] || venue.priceLevel > priceRange[1]) {
        return false;
      }
      
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          venue.name.toLowerCase().includes(searchLower) ||
          venue.city.toLowerCase().includes(searchLower) ||
          venue.description.toLowerCase().includes(searchLower) ||
          venue.features.some(feature => feature.toLowerCase().includes(searchLower))
        );
      }
      
      return true;
    });

    // Sort venues
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "price":
          return a.priceLevel - b.priceLevel;
        case "popularity":
          return b.reviewCount - a.reviewCount;
        default:
          return b.rating - a.rating;
      }
    });

    return filtered;
  }, [selectedCategories, selectedCities, priceRange, searchTerm, sortBy]);

  // Get venue stats
  const stats = useMemo(() => {
    const totalVenues = MOCK_VENUES.length;
    const openNow = MOCK_VENUES.filter(v => v.openNow).length;
    const cities = [...new Set(MOCK_VENUES.map(v => v.city))].length;
    const avgRating = MOCK_VENUES.reduce((sum, v) => sum + v.rating, 0) / totalVenues;
    
    return { totalVenues, openNow, cities, avgRating: avgRating.toFixed(1) };
  }, []);

  const handleVenueSelect = (venue: Venue) => {
    console.log("Selected venue:", venue);
    // TODO: Navigate to venue detail page
  };

  return (
    <div className="bg-background min-h-screen">
      <VenueFilters
        selectedCategories={selectedCategories}
        selectedCities={selectedCities}
        priceRange={priceRange}
        onCategoryChange={setSelectedCategories}
        onCityChange={setSelectedCities}
        onPriceRangeChange={setPriceRange}
        onSearchChange={setSearchTerm}
      />

      <div className="container mx-auto px-4 py-6">
        {/* Stats and Controls */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
            <Card className="p-4 text-center bg-card/50 border-border/50">
              <div className="text-2xl font-bold text-neon-pink">{stats.totalVenues}</div>
              <div className="text-sm text-muted-foreground">Totalt steder</div>
            </Card>
            <Card className="p-4 text-center bg-card/50 border-border/50">
              <div className="text-2xl font-bold text-neon-turquoise">{stats.openNow}</div>
              <div className="text-sm text-muted-foreground">Åpent nå</div>
            </Card>
            <Card className="p-4 text-center bg-card/50 border-border/50">
              <div className="text-2xl font-bold text-neon-gold">{stats.cities}</div>
              <div className="text-sm text-muted-foreground">Byer</div>
            </Card>
            <Card className="p-4 text-center bg-card/50 border-border/50">
              <div className="text-2xl font-bold text-neon-purple">{stats.avgRating}</div>
              <div className="text-sm text-muted-foreground">Snitt rating</div>
            </Card>
          </div>

          <div className="flex items-center space-x-3">
            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-card border border-border/50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-neon-pink/50"
            >
              <option value="rating">Høyest vurdert</option>
              <option value="price">Lavest pris</option>
              <option value="popularity">Mest populære</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex bg-card border border-border/50 rounded-lg overflow-hidden">
              <Button
                variant={viewMode === "grid" ? "neon" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-none px-3"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "neon" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-none px-3"
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "map" ? "neon" : "ghost"}
                size="sm"
                onClick={() => setViewMode("map")}
                className="rounded-none px-3"
              >
                <Map className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-neon-pink" />
            <span className="text-foreground font-medium">
              {filteredVenues.length} steder funnet
            </span>
            {(selectedCategories.length > 0 || selectedCities.length > 0 || searchTerm) && (
              <span className="text-muted-foreground">
                • Filtrert resultat
              </span>
            )}
          </div>
          
          {filteredVenues.length === 0 && (
            <div className="text-muted-foreground text-sm">
              Prøv å justere filtrene dine
            </div>
          )}
        </div>

        {/* Venue Grid */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVenues.map((venue) => (
              <VenueCard
                key={venue.id}
                venue={venue}
                onSelect={handleVenueSelect}
              />
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className="space-y-4">
            {filteredVenues.map((venue) => (
              <div key={venue.id} className="w-full">
                <VenueCard venue={venue} onSelect={handleVenueSelect} />
              </div>
            ))}
          </div>
        )}

        {/* Map View Placeholder */}
        {viewMode === "map" && (
          <Card className="p-12 text-center bg-card/50 border-border/50">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-neon-turquoise" />
            <h3 className="text-xl font-bold mb-2">Kartvisning kommer snart</h3>
            <p className="text-muted-foreground">
              Interaktivt kart med alle {filteredVenues.length} stedene vil være tilgjengelig i neste oppdatering.
            </p>
          </Card>
        )}

        {/* Empty State */}
        {filteredVenues.length === 0 && (
          <Card className="p-12 text-center bg-card/50 border-border/50">
            <TrendingUp className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-bold mb-2">Ingen steder funnet</h3>
            <p className="text-muted-foreground mb-4">
              Prøv å justere filtrene eller søkeordet for å finne flere steder.
            </p>
            <Button
              variant="neon-outline"
              onClick={() => {
                setSelectedCategories([]);
                setSelectedCities([]);
                setPriceRange([1, 4]);
                setSearchTerm("");
              }}
            >
              Nullstill alle filtre
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default VenueListings;