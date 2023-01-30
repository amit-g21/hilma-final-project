import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CollectionsPage from "./CollectionsPage";

function Home() {
  return (
    <>
      <Navbar />
      <CollectionsPage />
    </>
  );
}

export default Home;
