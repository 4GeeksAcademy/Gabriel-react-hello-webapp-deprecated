import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import React from "react";
import rigoBaby from "../../img/rigo-baby.jpg";

export const Cardvistasplanetas = () => {
  const { id } = useParams(); // Obtiene el ID desde la URL
  const { store } = useContext(Context);
  const [detalles, setDetalles] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const personaje = store.ArrayPlanetas.find((p) => p.uid === id);
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
          {detalles.name} fue registrado en el año {""}
            {new Date(detalles.created).getFullYear()} y es un planeta con clima
            {detalles.climate}. Tiene una superficie de agua del {""} 
            {detalles.surface_water}% y un diámetro de {detalles.diameter} km.
            Su rotación es de {detalles.rotation_period} horas y su terreno se
            describe como {detalles.terrain}. La gravedad es de 
            {detalles.gravity}. Orbita su estrella en {detalles.orbital_period}
            {" "}días y tiene una población de {detalles.population} habitantes. La
            información sobre {detalles.name} fue registrada y actualizada el 
            {new Date(detalles.edited).toLocaleDateString()}, lo que indica su
            relevancia en los archivos históricos de la galaxia.
          </p>
        </div>
        </div>
      </div>
  );
};