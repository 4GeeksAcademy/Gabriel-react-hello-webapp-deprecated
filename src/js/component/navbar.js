import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logoStarwar from "../../img/Star_Wars_Logo.svg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../../styles/index.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  // Cargar favoritos desde localStorage solo al inicio
  useEffect(() => {
    const favoritosGuardados = JSON.parse(localStorage.getItem("favoritos"));
    if (favoritosGuardados && store.ArrayFavoritos.length === 0) {
      actions.setFavoritos(favoritosGuardados);
    }
  }, []); // ✅ Se ejecuta solo al montar el componente

  // Guardar favoritos en localStorage cada vez que cambien
  useEffect(() => {
    if (store.ArrayFavoritos.length > 0) {
      localStorage.setItem("favoritos", JSON.stringify(store.ArrayFavoritos));
    }
  }, [store.ArrayFavoritos]); // ✅ Se ejecuta solo cuando cambia `ArrayFavoritos`

  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between items-center px-6">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/">
          <img
            className="logo h-10 w-auto"
            src={logoStarwar}
            alt="Star Wars Logo"
          />
        </Link>
      </div>

      {/* Enlaces centrados */}
      <div className="flex gap-6 text-white">
        <Link
          to="/Personajes"
          className="listnav flex flex-col items-center text-white"
        >
          <span>Personajes</span>
        </Link>
        <Link
          to="/vehiculos"
          className="listnav flex flex-col items-center text-white"
        >
          <span>Vehículos</span>
        </Link>
        <Link
          to="/Planetas"
          className="listnav flex flex-col items-center text-white"
        >
          <span>Planetas</span>
        </Link>
      </div>

      {/* Menú de favoritos pegado a la derecha */}
      <div className="flex-none ml-auto">
        <ul className="menu menu-horizontal favoritos">
          <li>
            <details>
              <summary className="drop text-white">Favoritos</summary>
              <ul className="color rounded-t-none p-2 z-50 ">
                {Array.isArray(store.ArrayFavoritos) &&
                store.ArrayFavoritos.length > 0 ? (
                  store.ArrayFavoritos.map((t, index) => {
                    console.log("Tipo:", t.type, "UID:", t.uid); // 🔍 Verificar valores en la consola

                    return (
                      <li
                        key={index}
                        className="flex justify-between items-end listamapfavoritos"
                      >
                        <Link className="tex"
                          to={`/vistas${
                            t.type ? t.type.toLowerCase() : "personajes"
                          }/${t.uid}`}
                        >
                          <span>{t.name}</span>
                        </Link>

                        <button
                          onClick={() => actions.eliminarFavorito(t.uid)}
                          className="btn btn-ghost btn-sm"
                        >
                          <FontAwesomeIcon icon={faTrash} size="xs" />
                        </button>
                      </li>
                    );
                  })
                ) : (
                  <li className="text-white">No hay favoritos</li>
                )}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
