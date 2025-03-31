import { Link } from "react-router-dom";
import "../../styles/index.css";
// import { Menu } from "../components/Menu.jsx";
import { Menu } from "../component/Menu.jsx";
import fondo from "../../img/1.webp";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cardvistasplanetas } from "../component/Cardvistasplanetas.jsx";


export const VistasPlanetas = () => {

    
      return (
        <div className="fondo d-flex justify-content-center align-items-center">
          <Cardvistasplanetas />
        </div>
      );
      
        }; 