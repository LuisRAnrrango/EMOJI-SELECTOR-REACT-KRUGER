import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Emojin } from "./components/pages/Emojin";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Emojin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
