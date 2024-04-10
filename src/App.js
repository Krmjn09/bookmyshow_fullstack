import "./App.css";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";

//slick informatioin
import "slick-carousel/slick/slick-theme.css";
import Moviepage from "./pages/Movie.page";
import Homepage from "./pages/Home.page";
import Playpage from "./pages/Play.page";

function App() {
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/movie/:id" element={<Moviepage />} />
    <Route path="/plays" element={<Playpage />} />
  </Routes>;
}

export default App;
