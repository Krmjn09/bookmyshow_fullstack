import React, { useState } from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import EntertainmentCardSlider from "../components/Entertaiment/EntertainmentCardComponent"; // Corrected import
import PosterSlider from "../components/PosterSlider/PosterSliderComponent";
import HeroCarousel from "../components/HeroCarousel/HeroCarouselComponent";
// import Navbar from "../components/Navbar/NavbarComponent";

const Homepage = () => {
  const [recommendedMovies] = useState([]);
  const [premierMovies] = useState([]);
  const [onlineStreamEvents] = useState([]);
  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider /> {/* Corrected component reference */}
      </div>

      <div className="cntainer mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subject="List of recommended movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="data:image/jpeg;base64,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"
              alt="rupay"
              className="w-full h-full"
            />
          </div>

          <PosterSlider
            title="Premiers"
            subject="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap">
        <PosterSlider
          title="Online Streaming Events"
          subject="Watch online streaming events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(Homepage);
