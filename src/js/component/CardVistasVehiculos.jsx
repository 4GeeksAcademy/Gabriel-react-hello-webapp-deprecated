import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import React from "react";
import rigoBaby from "../../img/rigo-baby.jpg";

export const CardVistasVehiculos = () => {
  const { id } = useParams(); // Obtiene el ID desde la URL
  const { store } = useContext(Context);
  const [detalles, setDetalles] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const personaje = store.ArrayVehiculos.find((p) => p.uid === id);
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
            {detalles.name}, modelo {detalles.model} fabricado por 
            {detalles.manufacturer}, es una nave de clase 
            {detalles.vehicle_class}. Fue registrada el {" "}
            {new Date(detalles.created).toLocaleDateString()}. Tiene una
            longitud de {detalles.length} metros y una velocidad máxima
            atmosférica de {detalles.max_atmosphering_speed}. Requiere una
            tripulación de {detalles.crew} y no tiene capacidad para
            pasajeros. Su capacidad de carga es {detalles.cargo_capacity} y
            sus consumibles duran ${detalles.consumables}. El coste en
            créditos de esta nave es {detalles.cost_in_credits}. La
            información sobre el {detalles.name} fue actualizada por última
            vez el {new Date(detalles.edited).toLocaleDateString()}.
          </p>
        </div>
      </div>
    </div>
  );
};
