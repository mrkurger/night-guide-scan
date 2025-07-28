import Header from "./Header";
import LandingHero from "./LandingHero";

const MainApp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LandingHero />
      </main>
    </div>
  );
};

export default MainApp;