import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
// Components
import Entertainment from "../components/Entertaiment/EntertainmentCardComponent";
import PosterSlider from "../components/PosterSlider/PosterSliderComponent";
import HeroCarousel from "../components/HeroCarousel/HeroCarouselComponent";
// import Navbar from "../components/Navbar/NavbarComponent";

const Homepage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(Homepage);
