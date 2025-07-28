import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Calendar } from "lucide-react";

interface AgeVerificationProps {
  onVerified: () => void;
}

const AgeVerification = ({ onVerified }: AgeVerificationProps) => {
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerification = () => {
    setIsVerifying(true);
    // Simulate verification process
    setTimeout(() => {
      onVerified();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 via-transparent to-neon-turquoise/10 animate-pulse"></div>
      
      <Card className="relative max-w-md w-full p-8 text-center border-border/50 bg-card/80 backdrop-blur-sm">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-turquoise rounded-full flex items-center justify-center mb-4 animate-neon-pulse">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-neon-pink to-neon-turquoise bg-clip-text text-transparent">
            Aldersverifikasjon
          </h1>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-muted-foreground">
            Denne plattformen inneholder vokseninnhold og er kun tilgjengelig for personer over 18 år.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Du må være 18+ for å fortsette</span>
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={handleVerification}
            disabled={isVerifying}
            className="w-full bg-gradient-to-r from-neon-pink to-neon-turquoise hover:from-neon-pink/80 hover:to-neon-turquoise/80 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/25"
          >
            {isVerifying ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Verifiserer...</span>
              </div>
            ) : (
              "Jeg er 18 år eller eldre"
            )}
          </Button>
          
          <p className="text-xs text-muted-foreground">
            Ved å fortsette bekrefter du at du er over 18 år og godtar våre{" "}
            <span className="text-neon-turquoise hover:underline cursor-pointer">
              brukervilkår
            </span>{" "}
            og{" "}
            <span className="text-neon-turquoise hover:underline cursor-pointer">
              personvernerklæring
            </span>
            .
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AgeVerification;