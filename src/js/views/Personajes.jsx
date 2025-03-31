import { Link } from "react-router-dom";
import "../../styles/index.css";
import { Menu } from "../component/Menu.jsx";
import { Cardpersonaje } from "../component/Cardpersonajes.jsx";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



export const Personajes = () => {


  return (
    <div className="fondo d-flex justify-content-center align-items-center">
      <Cardpersonaje />
    </div>
  );
  
    }; 
