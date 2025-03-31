import { Link } from "react-router-dom";
import "../../styles/index.css";
import { Menu } from "../component/Menu.jsx";
import fondo from "../../img/1.webp";
import { CardVistasVehiculos } from "../component/CardVistasVehiculos.jsx";
import React, { useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from "../store/appContext";

export const VistasVehiculos = () => {
  const { actions } = useContext(Context);

  useEffect(() => {
    actions.ArrayVehiculos();
  }, []);

  return (

 <div className="fondo d-flex justify-content-center align-items-center">
          <CardVistasVehiculos/>
        </div>
      );
      
        }; 