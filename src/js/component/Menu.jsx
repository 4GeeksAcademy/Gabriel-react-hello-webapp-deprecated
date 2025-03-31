import { Link } from "react-router-dom";
import "../../styles/index.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



export const Menu = () => {

  return (
    <div className="drawer lg:drawer-open h-screen">
      <div className="bar h-full flex flex-col">
        <ul className="menu h-full w-70 p-1 flex flex-col">
          {/* Sidebar content here */}
          <Link to={"/Personajes"}>
            <li>Characters</li>
          </Link>
          <Link to={"/Planetas"}>
            <li>Planetas</li>
          </Link>
          <Link to={"/Vehiculos"}>
            <li>Vehiculos</li>
          </Link>
        </ul>
      </div>
    </div>
  );  
};