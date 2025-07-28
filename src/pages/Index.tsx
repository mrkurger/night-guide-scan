import { useState } from "react";
import AgeVerification from "@/components/AgeVerification";
import MainApp from "@/components/MainApp";

const Index = () => {
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  if (!isAgeVerified) {
    return <AgeVerification onVerified={() => setIsAgeVerified(true)} />;
  }

  return <MainApp />;
};

export default Index;
