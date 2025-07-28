import { MapPin, Calendar, TrendingUp, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MOCK_VENUES, VENUE_CATEGORIES } from "@/data/venues";

interface LandingHeroProps {
  onExploreClick: () => void;
}

const LandingHero = ({ onExploreClick }: LandingHeroProps) => {
  // Calculate real stats from venue data
  const totalVenues = MOCK_VENUES.length;
  const totalReviews = MOCK_VENUES.reduce((sum, venue) => sum + venue.reviewCount, 0);
  const openNow = MOCK_VENUES.filter(venue => venue.openNow).length;
  const upcomingEvents = MOCK_VENUES.reduce((sum, venue) => sum + (venue.upcomingEvents?.length || 0), 0);

  const quickStats = [
    { icon: MapPin, label: "Steder", value: `${totalVenues}`, color: "text-neon-pink" },
    { icon: Users, label: "Anmeldelser", value: `${(totalReviews / 1000).toFixed(1)}k`, color: "text-neon-turquoise" },
    { icon: Calendar, label: "Events", value: `${upcomingEvents}`, color: "text-neon-gold" },
    { icon: TrendingUp, label: "Åpent nå", value: `${openNow}`, color: "text-neon-purple" },
  ];

  // Featured categories with counts
  const featuredCategories = Object.entries(VENUE_CATEGORIES).slice(0, 3).map(([key, category]) => {
    const count = MOCK_VENUES.filter(venue => venue.category === key).length;
    return { ...category, key, count };
  });

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 via-transparent to-neon-turquoise/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-pink/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-turquoise/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-pink via-neon-gold to-neon-turquoise bg-clip-text text-transparent animate-neon-pulse">
              Oppdage Skandinavias
            </span>
            <br />
            <span className="text-foreground">Natteliv</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Din guide til den beste underholdningen og nattlivet i Oslo, Stockholm og København.
            Utforsk, vurder og oppdage nye opplevelser.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              variant="neon"
              className="px-8 py-3 rounded-xl"
              onClick={onExploreClick}
            >
              <Search className="w-5 h-5 mr-2" />
              Utforsk {totalVenues} steder
            </Button>
            <Button 
              variant="neon-outline" 
              size="lg"
              className="px-8 py-3 rounded-xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {upcomingEvents} arrangementer
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6 text-center bg-card/50 border-border/50 hover:border-neon-pink/30 transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/10">
                <IconComponent className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Featured Categories */}
        <div className="grid md:grid-cols-3 gap-6">
          {featuredCategories.map((category) => (
            <Card 
              key={category.key}
              className={`p-6 bg-gradient-to-br from-${category.color}/10 to-${category.color}/5 border-${category.color}/20 hover:border-${category.color}/40 transition-all duration-300 cursor-pointer group`}
              onClick={onExploreClick}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-${category.color}/20 rounded-lg flex items-center justify-center group-hover:bg-${category.color}/30 transition-colors`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <div className={`text-sm text-${category.color}`}>{category.count} steder</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                {category.description}
              </p>
              <div className={`text-sm text-${category.color} font-medium hover:underline`}>
                Utforsk kategori →
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingHero;