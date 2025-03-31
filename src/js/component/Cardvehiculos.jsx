import { Link } from "react-router-dom";
import "../../styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigo from "../../img/rigo-baby.jpg";

export const Cardvehiculos = () => {
  const { store, actions } = useContext(Context);

  const handleFavorite = (item) => {
    // Verificamos si ArrayFavoritos es un array antes de agregar el favorito
    if (Array.isArray(store.ArrayFavoritos)) {
      actions.agregarFavoritos(item, "vehiculos"); // Pasamos el tipo correcto
    } else {
      console.error("ArrayFavoritos no es un array");
    }
  };

  useEffect(() => {
    actions.ArrayVehiculos();
  }, [actions]); // Dependencia corregida

  return (
    <div className="tabla d-flex justify-center mt-4">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {store.ArrayVehiculos?.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={rigo} alt={`Avatar de ${item.name}`} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm opacity-50">{item.gender}</div>
                  </div>
                </div>
              </td>
              <td>
                {/* Enlace a la vista detallada con el tipo correcto */}
                <button className="btn btn-ghost">
                  <Link className="text" to={`/vistasvehiculos/${item.uid}`}>details</Link>
                </button>
                <button className="btn" onClick={() => handleFavorite(item)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

