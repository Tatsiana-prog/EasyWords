import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Header } from "../../Header/Header";
import { AppDescription } from "../../AppDescription/AppDescription";
import { UniqueMethodology } from "../../UniqueMethodology/UniqueMethodology";
import { AppFeatures } from "../../AppFeatures/AppFeatures";
import { Tariffs } from "../../Tariffs/Tariffs";
import { JoinCommunity } from "../../JoinCommunity/JoinCommunity";
import { SuccesStories } from "../../SuccesStories/SuccesStories";
import { PreOrderOffer } from "../../PreOrderOffer/PreOrderOffer";
import { FQA } from "../../FQA/FQA";
import { Footer } from "../../Footer/Footer";

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <div className="Wrapper">
        <Header />
        <AppDescription />
        <UniqueMethodology id="UniqueMethodology" />
      </div>
      <AppFeatures />
      <div className="Wrapper">
        <Tariffs id="Tariffs" />
        <JoinCommunity />
        <SuccesStories />
        <PreOrderOffer />
        <FQA id="FAQ" />
      </div>
      <Footer id="Footer" />
    </>
  );
};
