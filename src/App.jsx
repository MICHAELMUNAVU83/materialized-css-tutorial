import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <>
      <h1>COLORS</h1>
      <div className="red darken-5 white-text">Div with color classs</div>
      <div className="purple lighten-3 blue-text">Div with color classs</div>
      <h1>BUTTONS</h1>
      <a className="waves-effect waves-light btn">button</a>
      <a className="waves-effect  waves-light btn">
        <i className="material-icons left ">cloud</i>button
      </a>
      <a className="waves-effect btn-large waves-light btn">
        <i className="material-icons right">cloud</i>button
      </a>
      {/* floating makes it round */}
      <a class="btn-floating btn-large waves-effect waves-light red">
        <i class="material-icons left">add</i>
      </a>
      <h1>HELPERS</h1>
      {/* alignment */}
      <div>
        <p className="left-align">left align</p>
        <p className="right-align">right align</p>
        <p className="center-align">center align</p>
      </div>
      {/* hide content */}
      <div className="hide">hidden for all devices</div>
      <div className="hide-on-small-only">hidden for mobile devices</div>
      <div className="hide-on-med-only">hidden for tablets only</div>
      <div className="hide-on-med-and-down">hidden for tablets and smaller</div>
      <div className="hide-on-med-and-up">hidden for tablets and higher</div>
      <div className="hide-on-large-only">hidden for desktops </div>
      {/* truncate */}
      <p className="truncate">
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      {/* effects */}
      <div className="red white-text hoverable">hoverable</div>
      <div className="red white-text _pulse">pulse</div>
      {/* shadows */}
      <p className="z-depth-1">z-depth-1</p>
      <p className="z-depth-1">z-depth-2</p>
      {/* flow text */}
      <p className="flow">
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      {/* responsive images */}
      <img src="https://picsum.photos/200" className="responsive-img " />
      {/* circular images */}
      <img src="https://picsum.photos/200" className="responsive-img  circle" />

      {/* cards */}

      
    </>
  );
}

export default App;
