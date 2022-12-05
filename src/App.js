// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <TextForm heading="Enter any text :" /> */}
      {/* <About /> */}
      <Router>
        <Navbar name="Quarina" />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exactf
            path="/"
            element={<TextForm heading="Enter any text :" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
