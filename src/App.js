import './App.css';
import menu from './assets/menu.png'
import logo from './assets/logo.png'
import lamp from "./assets/lamp.png" 
import light from "./assets/light.png" 
import { useState } from 'react';


function App() {
  
  const [isToggle, setToggle] = useState(true); 
  const [btnStyle, setBtnStyle] = useState(null);
  const [spanStyle, setSpanStyle] = useState(null);
  const [lightStyle, setLightStyle] = useState(null);

  function toggleBtn() {
    
    const activeBtn = {
      background: "green", 
    }
    const activeSpan = {
      background: "white",
      marginLeft: "31px",
    }
    const onLight = {
      opacity: 1
    }

    setToggle(!isToggle)
    setBtnStyle(isToggle ? activeBtn : null)
    setSpanStyle(isToggle ? activeSpan : null)
    setLightStyle(isToggle ? onLight : null)    
  }
  

  return (
    <div className="hero">
      <nav>
        <img src={menu} className="menu-img"/>
        <img src={logo} className="logo"/>
        <ul>
          <li><a href="">Latest</a></li>
          <li><a href="">Modern</a></li>
          <li><a href="">Contemporary</a></li>
          <li><a href="">Affordable</a></li>
        </ul>
        <button type="button" onClick={toggleBtn} style={btnStyle}>
          <span style={spanStyle}>

          </span>
        </button>
      </nav>
      <div className="lamp-container">
        <img src={lamp} alt="" className="lamp"/>
        <img src={light} alt="" className="light" style={lightStyle}/>
      </div>

      <div className="text-container">
        <h1>
          Latest<br/>in Lighting
        </h1>
        <p>
          This is the first lamp from our company. We're making a huge collection of modern Lamps in all categories from home use to office use.
        </p>
        <a href="">Check All Collection</a>
        <div className="control">
          <p>04</p>
          <div className="line"><span></span></div>
          <p>05</p>
        </div>
      </div>
    </div>
  );
}

export default App;
