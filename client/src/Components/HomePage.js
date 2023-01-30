
import { useEffect, useState } from "react";
import "../clientCss/home.css";
import ToCollection from "./Small Components/ToCollection";
import LoadingLogo from "./Small Components/LoadingLogo";
import Navbar from "./Navbar";
import Footer from "./Footer";



function Home() {



  const [collections, editCollections] = useState([]);

  async function getCollections() {
    let promise = await fetch("http://localhost:8000/collection");
    let result = await promise.json();
    editCollections(result);
  }

  useEffect(() => {
    setTimeout(() => {
      getCollections();
    }, 500);
  }, []);

  if (collections.length === 0) {
    return <LoadingLogo />;
  }

  return (
    <div>
      <Navbar />
        <img id="banner-image" src="/images/homeBanner.png" />
        <h3>Shop Our Collections:</h3>

        <div className="collections-menu">
          {collections.map((collection) => {
            return <ToCollection key={collection.id} collection={collection} />;
          })}
        </div>
      <Footer />
    </div>
  );
}

export default Home;

