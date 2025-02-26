

import './App.scss';

import Footer from "./Pages/Footer";
import { Route, Routes } from "react-router-dom";
import Createfeatures from "./Pages/Createfeatures";
import Createservice from "./Pages/Createfeatures";
import Featured from "./Pages/Featured";
import Home from "./Pages/Home";
import { FaArrowUp } from "react-icons/fa";
import About from './Pages/About'

// Algoridum
// 1 firstly use header header
// 2 then use section
// 3 then cards
// 4 then express the features of the cars
// 5 then brand logo
// 6 and the last one is footer

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createfeatures" element={<Createfeatures />} />
        <Route path="/About" element={<About />} />
        <Route path="/create-service" element={<Createservice />} />
      </Routes>
      <a className="floating" href="#" title="Click to scroll top"><FaArrowUp /> </a>
      <Footer />

    </>
  );
}

export default App;