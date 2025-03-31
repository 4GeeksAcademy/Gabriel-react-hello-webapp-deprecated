import { Link } from "react-router-dom";
import "../../styles/index.css";
import { Menu } from "../component/Menu.jsx";
import fondo from "../../img/1.webp";
import { Cardvehiculos } from "../component/Cardvehiculos.jsx";
import React, { useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from "../store/appContext";

export const Vehiculos = () => {
  const { actions } = useContext(Context);

  useEffect(() => {
    actions.ArrayVehiculos();
  }, []);

   return (
        <div className="fondo d-flex justify-content-center align-items-center">
          <Cardvehiculos />
        </div>
      );
      
        }; 
