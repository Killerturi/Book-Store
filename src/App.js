import "./App.css";
import BookStore from "./Components/BookStore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Regster from "./Components/Regster";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Regster />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
