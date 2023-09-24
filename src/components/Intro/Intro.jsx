import React, { useContext } from "react";
import "./Intro.css";
import { themeContext } from "../../Context";
import { useState, useRef } from "react";


import {MdCloudUpload, MdDelete } from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'

import { Link } from "react-scroll";
const Intro = () => {
  // Transition

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  //Submit
  // const [files, setFiles] = useState(null);
  // const inputRef = useRef();

  // const handleDragOver = (event) => {
  //   event.preventDefault();
  // };

  // const handleDrop = (event) => {
  //   event.preventDefault();
  //   setFiles(event.dataTransfer.files)
  // };
  
  // // send files to the server // learn from my other video
  // const handleUpload = () => {
  //   const formData = new FormData();
  //   formData.append("Files", files);
  //   console.log(formData.getAll())
  //   // fetch(
  //   //   "link", {
  //   //     method: "POST",
  //   //     body: formData
  //   //   }  
  //   // )
  // };

  // if (files) return (
  //   <div className="uploads">
  //       <ul>
  //           {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
  //       </ul>
  //       <div className="actions">
  //           <button onClick={() => setFiles(null)}>Cancel</button>
  //           <button onClick={handleUpload}>Upload</button>
  //       </div>
  //   </div>
  // )

  const [image, setImage] = useState(null);
  const [filesName, setFileName] = useState("No selected File");


  return (
    <>
      <div className="Intro" id="Intro">
        {/* left name side */}
        <div className="i-left">
          <div className="i-name">
            {/* yahan change hai darkmode ka */}
            <span style={{ color: darkMode ? "white" : "" }}></span>
          </div>
          <Link to="contact" smooth={true} spy={true}>
          </Link>
    <section>
     <div className="w-screen h-screen">
      <div style={{float: "left"}}>
          <div className="container">  
          <h1>Check Your Plagarism here!</h1> 
            {/* <textarea name="check Text here" className="user" placeholder="Check text here"/> */}
            <textarea
              rows="7"
              name='message'
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/><br />
            <input type="submit" value="Send" className="button" />
            {/* <input type="submit" value="Upload" className="button px-8"/> */}
          </div>
        
        {/* Drag and Drop  */}
{/* 
          <div 
            className="dropzone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            >
          
          <input 
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}      
          />
        <button onClick={() => inputRef.current.click()} className="button">Select Files</button>
        </div> */}

        {/* end */}
        </div>
        <div style={{float: "right"}}>
        <main>
          <form
          onClick={() => document.querySelector(".input-field").click() }>
            <input type="file" accept='image/*' className="input-field" hidden
            onChange={({ target:{files}}) => {
              files[0] && setFileName(files[0].name)
              if(files){
                setImage(URL.createObjectURL(files[0]))
              }

            }}/>
            {image ?
            <img src={image} width={150} height={150} alt={filesName}/>
          :
          <>
          <MdCloudUpload color='#1475cf' size={60}/>
          <p>Browse Files to Upload</p>
          </>
          }
          </form>
          <section className="uploaded-row">
            <AiFillFileImage color="#1475cf" />
            <span className="upload-content">
              {filesName} -
              <MdDelete
              onClick={()=>{
                setFileName("No selected File")
                setImage(null)
              }}/>
            </span>
            <input type="submit" value="Upload" className="button" />
          </section>
        </main>
    </div>
    </div>
    </section>
  


          <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>

    </>

  );
};


export default Intro;
