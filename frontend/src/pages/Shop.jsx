import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import New_Collections from "../components/New_Collections/New_Collections";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Shop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <New_Collections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
