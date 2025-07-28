import { Venue, VENUE_CATEGORIES } from "@/data/venues";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  Crown,
  CheckCircle,
  TrendingUp,
  Calendar,
  Euro
} from "lucide-react";

interface VenueCardProps {
  venue: Venue;
  onSelect?: (venue: Venue) => void;
}

const VenueCard = ({ venue, onSelect }: VenueCardProps) => {
  const category = VENUE_CATEGORIES[venue.category];
  const priceSymbols = "€".repeat(venue.priceLevel);
  
  const getAtmosphereColor = (level: number) => {
    if (level >= 4) return "text-neon-pink";
    if (level >= 3) return "text-neon-gold";
    return "text-neon-turquoise";
  };

  const getAtmosphereText = (level: number) => {
    if (level >= 4) return "Veldig livlig";
    if (level >= 3) return "Moderat aktivitet";
    return "Rolig atmosfære";
  };

  return (
    <Card className="group overflow-hidden bg-card/50 border-border/50 hover:border-neon-pink/30 transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/10 animate-fade-in">
      {/* Image Header */}
      <div className="relative h-48 bg-gradient-to-br from-card to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
        
        {/* Status Badges */}
        <div className="absolute top-3 left-3 z-20 flex gap-2">
          {venue.verified && (
            <Badge className="bg-neon-turquoise/20 text-neon-turquoise border-neon-turquoise/50">
              <CheckCircle className="w-3 h-3 mr-1" />
              Verifisert
            </Badge>
          )}
          {venue.openNow && (
            <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
              <Clock className="w-3 h-3 mr-1" />
              Åpent nå
            </Badge>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3 z-20">
          <Badge className={`bg-${category.color}/20 text-${category.color} border-${category.color}/50`}>
            <span className="mr-1">{category.icon}</span>
            {category.name}
          </Badge>
        </div>

        {/* Atmosphere Level */}
        <div className="absolute bottom-3 right-3 z-20">
          <div className={`flex items-center space-x-1 ${getAtmosphereColor(venue.atmosphereLevel)}`}>
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-medium">{getAtmosphereText(venue.atmosphereLevel)}</span>
          </div>
        </div>

        {/* Placeholder for venue image */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-neon-gold/10 to-neon-turquoise/20 flex items-center justify-center">
          <div className="text-6xl opacity-30">{category.icon}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground group-hover:text-neon-pink transition-colors">
              {venue.name}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {venue.city}, {venue.country}
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 mb-1">
              <Star className="w-4 h-4 text-neon-gold fill-current" />
              <span className="font-semibold text-foreground">{venue.rating}</span>
              <span className="text-muted-foreground text-sm">({venue.reviewCount})</span>
            </div>
            <div className="text-neon-gold font-bold">{priceSymbols}</div>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {venue.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {venue.features.slice(0, 3).map((feature, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs border-border/50 text-muted-foreground"
            >
              {feature}
            </Badge>
          ))}
          {venue.features.length > 3 && (
            <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
              +{venue.features.length - 3} mer
            </Badge>
          )}
        </div>

        {/* Info Row */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {venue.openingHours}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {venue.ageRestriction}+
            </div>
          </div>
        </div>

        {/* Special Offers */}
        {venue.specialOffers && venue.specialOffers.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center text-neon-gold text-sm font-medium mb-2">
              <Crown className="w-4 h-4 mr-1" />
              Spesialtilbud
            </div>
            <div className="text-sm text-muted-foreground">
              {venue.specialOffers[0]}
            </div>
          </div>
        )}

        {/* Upcoming Events */}
        {venue.upcomingEvents && venue.upcomingEvents.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center text-neon-turquoise text-sm font-medium mb-2">
              <Calendar className="w-4 h-4 mr-1" />
              Kommende arrangementer
            </div>
            <div className="text-sm text-muted-foreground">
              {venue.upcomingEvents[0]}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4 border-t border-border/50">
          <Button 
            variant="neon" 
            size="sm" 
            className="flex-1"
            onClick={() => onSelect?.(venue)}
          >
            Se detaljer
          </Button>
          <Button 
            variant="neon-outline" 
            size="sm"
            className="px-3"
          >
            <MapPin className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default VenueCard;