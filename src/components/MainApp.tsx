import { useState } from "react";
import Header from "./Header";
import LandingHero from "./LandingHero";
import VenueListings from "./VenueListings";

const MainApp = () => {
  const [currentView, setCurrentView] = useState<"landing" | "venues">("landing");

  const handleExploreClick = () => {
    setCurrentView("venues");
  };

  const handleBackToHome = () => {
    setCurrentView("landing");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onLogoClick={handleBackToHome} />
      <main>
        {currentView === "landing" ? (
          <LandingHero onExploreClick={handleExploreClick} />
        ) : (
          <VenueListings />
        )}
      </main>
    </div>
  );
};

export default MainApp;