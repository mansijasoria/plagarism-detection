import React, { useContext } from "react";
import "./Faq.css";


import { themeContext } from "../../Context";
const Faq = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="t-wrapper" id="faq">
      <div className="t-heading"></div>
      
      <span style={{color: darkMode?'white': ''}}>FAQ</span>
    
    </div>
  );
};

export default Faq;
