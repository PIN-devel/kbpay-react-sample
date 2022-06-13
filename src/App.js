import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import CustomView from "./Pages/CustomView";
import Home from "./Pages/Home";

function App() {
  const navigate = useNavigate();
  const slideItemList = [1, 2, 3, 4, 5];
  const [index, setIndex] = useState(1);
  const handleButton = (cmd) => {
    if (index > 5 || index < 1) return;
    const carouselSlide = document.querySelector(".slide_list");
    const carouselContents = document.querySelectorAll(".slide_item");
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    const size = carouselContents[0].clientWidth;
    setIndex((prev) => {
      return cmd === 0 ? prev - 1 : prev + 1;
    });
    carouselSlide.style.transform = "translateX(" + -size * index + "px)";
  };

  useEffect(() => {
    const carouselSlide = document.querySelector(".slide_list");
    const carouselContents = document.querySelectorAll(".slide_item");
    const size = carouselContents[0].clientWidth;
    carouselSlide.style.transform = "translateX(" + -size * index + "px)";
    navigate(`${index}`);
  }, [index]);

  return (
    <div className="App">
      <div className="slide_box">
        <div className="slide_list">
          <div id="firstClone" className="slide_item">
            start
          </div>
          {slideItemList.map((el) => (
            <div className="slide_item" key={el}>
              {el}
            </div>
          ))}
          <div id="firstClone" className="slide_item">
            end
          </div>
        </div>
      </div>
      <button
        className="prevBtn"
        onClick={() => {
          handleButton(0);
        }}
      >
        &lt;
      </button>
      <button
        className="nextBtn"
        onClick={() => {
          handleButton(1);
        }}
      >
        &gt;
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<CustomView msg={index} />} />
      </Routes>
    </div>
  );
}

export default App;
