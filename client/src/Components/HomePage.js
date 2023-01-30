import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CollectionsPage from "./CollectionsPage";

function Home() {
  return (
    <>
      <Navbar />
      <img id="banner-image" src="/images/homeBanner.png" />
      <h3>Shop Our Collections:</h3>
      <CollectionsPage />
    </>
  );
}

export default Home;
