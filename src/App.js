import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import "./App.css";
import Aboutus from "./components/Aboutus/Aboutus";
import Works from "./components/Works/Works";
import Faq from "./components/Faq/Faq";
import Accordian from "./components/Faq/Accordian";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Services_new from "./components/Services/Services_new";

import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      {/* <Services /> */}
      <Services_new />
      <Aboutus />
      <Works />
      {/* <Faq /> */}
        <Accordian/>
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;