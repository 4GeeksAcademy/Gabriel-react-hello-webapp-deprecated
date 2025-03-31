import { Link } from "react-router-dom";
import "../../styles/index.css";
// import { Menu } from "../components/Menu.jsx";
import { Menu } from "../component/Menu.jsx";
import fondo from "../../img/1.webp";
import { Cardvehiculos} from "../component/Cardvehiculos.jsx";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



export const Vistasvehiculos = () => {

  return (
    <div className="fondo d-flex justify-content-center align-items-center">
      <Cardvehiculos />
    </div>
  );
  
    }; 