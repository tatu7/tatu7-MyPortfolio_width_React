import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./main.scss";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import MainNav from "./routes/Navbar/MainNav";
import Navbar from "./routes/Navbar/Navbar";
import Sidebar from "./routes/Sidebar/Sidebar";
function App() {
  const [theme, setTheme] = useState(true);
  const [color, setColor] = useState(true);
  if (color === false) {
    document.documentElement.style.setProperty("--qora", "white");
    document.documentElement.style.setProperty("--oq", "black");
  }
  if (color === true) {
    document.documentElement.style.setProperty("--qora", "black");
    document.documentElement.style.setProperty("--oq", "white");
  }

  return (
    <div className="App">
      {theme ? (
        <MainNav
          theme={theme}
          setTheme={setTheme}
          color={color}
          setColor={setColor}
        />
      ) : (
        <Navbar
          theme={theme}
          setTheme={setTheme}
          color={color}
          setColor={setColor}
        />
      )}
      <div className="right">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="left">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
