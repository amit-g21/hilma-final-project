
import { useEffect, useState } from "react";
import "../clientCss/home.css";
import "../clientCss/navbar.css";
import ToCollection from "./Small Components/ToCollection";
import LoadingLogo from "./Small Components/LoadingLogo";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Home() {
  const [collections, editCollections] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    process.env.PUBLIC_URL + '/images/image1.png',
    process.env.PUBLIC_URL + '/images/image2.png',
    process.env.PUBLIC_URL + '/images/image3.png'
  ];



  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  setTimeout(() => handleNext(), 4000);

  // setInterval(() => {
  //   setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  // } , 3000)


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
      <h3 id="h3Home">Shop Our Collections:</h3>

      <div className="collections-menu">
        {collections.map((collection) => {
          return <ToCollection key={collection.id} collection={collection} />;
        })}
      </div>

      <div className="image_slider">
        {/* <img className="commentsimage" src={process.env.PUBLIC_URL + '/images/checkout.jpg'} /> */}
        <img
          className={`slider-image ${currentImage === 0 ? 'current' : ''}`}
          src={images[0]}
          alt="Image slider"
        />
        <img
          className={`slider-image ${currentImage === 1 ? 'current' : ''}`}
          src={images[1]}
          alt="Image slider"
        />
        <img
          className={`slider-image ${currentImage === 2 ? 'current' : ''}`}
          src={images[2]}
          alt="Image slider"
        />
      </div>
      <div className="buttonNext">
        {/* {setInterval(() => handleNext(), 3000)}  */}
      </div>



      <Footer />
    </div>
  );
}

export default Home;

