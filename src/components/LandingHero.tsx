import { MapPin, Calendar, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const LandingHero = () => {
  const quickStats = [
    { icon: MapPin, label: "Steder", value: "150+", color: "text-neon-pink" },
    { icon: Users, label: "Anmeldelser", value: "2.4k", color: "text-neon-turquoise" },
    { icon: Calendar, label: "Events", value: "25", color: "text-neon-gold" },
    { icon: TrendingUp, label: "Aktive nå", value: "89", color: "text-neon-purple" },
  ];

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
              className="bg-gradient-to-r from-neon-pink to-neon-turquoise hover:from-neon-pink/80 hover:to-neon-turquoise/80 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/25"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Utforsk kartet
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-neon-turquoise/50 text-neon-turquoise hover:bg-neon-turquoise/10 px-8 py-3 rounded-xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Arrangementer i kveld
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

        {/* Quick Access */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-neon-pink/10 to-neon-pink/5 border-neon-pink/20 hover:border-neon-pink/40 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-neon-pink/20 rounded-lg flex items-center justify-center group-hover:bg-neon-pink/30 transition-colors">
                <MapPin className="w-6 h-6 text-neon-pink" />
              </div>
              <h3 className="text-lg font-semibold">I nærheten</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Finn de beste stedene rundt din lokasjon
            </p>
            <div className="text-sm text-neon-pink">8 steder åpnet nå →</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-neon-turquoise/10 to-neon-turquoise/5 border-neon-turquoise/20 hover:border-neon-turquoise/40 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-neon-turquoise/20 rounded-lg flex items-center justify-center group-hover:bg-neon-turquoise/30 transition-colors">
                <TrendingUp className="w-6 h-6 text-neon-turquoise" />
              </div>
              <h3 className="text-lg font-semibold">Høyest vurdert</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Oppdage stedene med best anmeldelser
            </p>
            <div className="text-sm text-neon-turquoise">Top 10 denne måneden →</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-neon-gold/10 to-neon-gold/5 border-neon-gold/20 hover:border-neon-gold/40 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-neon-gold/20 rounded-lg flex items-center justify-center group-hover:bg-neon-gold/30 transition-colors">
                <Calendar className="w-6 h-6 text-neon-gold" />
              </div>
              <h3 className="text-lg font-semibold">Events i kveld</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Spesielle arrangementer og show
            </p>
            <div className="text-sm text-neon-gold">5 events planlagt →</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;