import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import React from "react";
import rigoBaby from "../../img/rigo-baby.jpg";

export const Cardvistas = () => {
  const { id } = useParams(); // Obtiene el ID desde la URL
  const { store } = useContext(Context);
  const [detalles, setDetalles] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const personaje = store.ArrayPersonajes.find((p) => p.uid === id);
      if (personaje) {
        try {
          const res = await fetch(personaje.url);
          const data = await res.json();
          console.log("Detalles cargados:", data);

          setDetalles(data.result.properties);
        } catch (error) {
          console.error("Error cargando detalles:", error);
        }
      }
    };

    fetchDetails();
  }, [id, store.ArrayPersonajes]);

  if (!detalles) return <h2 className="text-center">Cargando detalles...</h2>;

  return (
    <div className="divdescripcion">
      <h1 className="text-center">{detalles.name}</h1>
      <div className="d-flex flex-wrap justify-content-center pt-3">
        <img src={rigoBaby} alt="Personaje" />
        <div className="descripcion">
          <p>
            {detalles.name} nació en el año {detalles.birth_year} y es un humano
            de género {detalles.gender}. Tiene una altura de {detalles.height}{" "}
            cm y un peso de {detalles.mass} kg. Sus rasgos físicos incluyen ojos
            de color {detalles.eye_color}, cabello {detalles.hair_color} y piel{" "}
            {detalles.skin_color}
            La información sobre {detalles.name} fue registrada y actualizada el{" "}
            {detalles.edited}, lo que indica su relevancia en los archivos
            históricos de la galaxia.
          </p>
        </div>
      </div>
    </div>
  );
};
