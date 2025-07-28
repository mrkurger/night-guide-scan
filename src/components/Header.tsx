import { Search, MapPin, User, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onLogoClick?: () => void;
}

const Header = ({ onLogoClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onLogoClick}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-neon-pink to-neon-turquoise rounded-lg flex items-center justify-center animate-neon-pulse">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-neon-pink to-neon-turquoise bg-clip-text text-transparent">
                NightLife
              </h1>
              <p className="text-xs text-muted-foreground">Skandinavia</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Søk steder, arrangementer..."
                className="pl-10 bg-background/50 border-border/50 focus:border-neon-pink/50 focus:ring-neon-pink/20"
              />
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            {/* Points Display */}
            <div className="hidden md:flex items-center space-x-2 bg-secondary/50 px-3 py-2 rounded-lg">
              <Star className="w-4 h-4 text-neon-gold" />
              <span className="text-sm font-medium text-neon-gold">1,250</span>
              <span className="text-xs text-muted-foreground">poeng</span>
            </div>

            {/* Anonymous User */}
            <Button variant="outline" size="sm" className="border-border/50 hover:border-neon-pink/50">
              <User className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Nattløper_42</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;