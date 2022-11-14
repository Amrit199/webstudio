import { useState } from "react";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import MenuList from "./components/menuList/MenuList";
import Navbar from "./components/navbar/Navbar";
import Works from "./components/works/Works";
import "./app.scss";
import Whyus from "./components/whyus/Whyus";
import Slider from "./components/slideCard/Slider";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MenuList menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Home />
        <Slider />
        <About />
        <Whyus />
        <Works />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}

export default App;
