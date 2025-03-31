const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			ArrayPersonajes: [],
			ArrayPlanetas: [],
			ArrayVehiculos: [],
			ArrayFavoritos: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			
			// Acción para cargar personajes
			ArrPersonajes: async () => {
				try {
					let resul = await fetch("https://www.swapi.tech/api/people/");
					if (!resul.ok) {
						throw new Error("Respuesta no ok");
					}
			
					let data = await resul.json();
			
					console.log("Datos recibidos:", data);
			
					// Asegúrate de que `data.results` contiene lo esperado
					if (!data.results || data.results.length === 0) {
						throw new Error("No se encontraron personajes");
					}
			
					setStore({ ArrayPersonajes: data.results });
			
				} catch (error) {
					console.error("Error en ArrPersonajes:", error);
				}
			},

			// Acción para cargar planetas
			ArrayPlanetas: async () => {
				try {
					let resul = await fetch("https://www.swapi.tech/api/planets/");
					if (!resul.ok) {
						throw new Error("Respuesta no ok");
					}
			
					let data = await resul.json();
			
					console.log("Datos recibidos:", data);
			
					// Asegúrate de que `data.results` contiene lo esperado
					if (!data.results || data.results.length === 0) {
						throw new Error("No se encontraron personajes");
					}
			
					setStore({ ArrayPlanetas: data.results });
			
				} catch (error) {
					console.error("Error en ArrayPlanetas:", error);
				}
			},

			// Acción para cargar vehículos
			ArrayVehiculos: async () => {
				try {
					let resul = await fetch("https://www.swapi.tech/api/vehicles/");
					if (!resul.ok) {
						throw new Error("Respuesta no ok");
					}
			
					let data = await resul.json();
			
					console.log("Datos recibidos:", data);
			
					// Asegúrate de que `data.results` contiene lo esperado
					if (!data.results || data.results.length === 0) {
						throw new Error("No se encontraron personajes");
					}
			
					setStore({ ArrayVehiculos: data.results });
			
				} catch (error) {
					console.error("Error en ArrayVehiculos:", error);
				}
			},

			setFavoritos: (favoritos) => {
				setStore({ ArrayFavoritos: favoritos });
			  },
			
			// Acción para agregar un favorito
			
				agregarFavoritos: (item, type) => {
					const store = getStore();
					// Agrega el tipo al objeto favorito
					const itemFavorito = { ...item, type };
				  
					const existe = store.ArrayFavoritos.some(fav => fav.uid === item.uid);
					if (!existe) {
					  // Actualiza el store
					  const nuevosFavoritos = [...store.ArrayFavoritos, itemFavorito];
				  
					  setStore({ ArrayFavoritos: nuevosFavoritos });
				  
					  // Guarda en localStorage
					  localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
				}
			  },
			  
			  // Acción para eliminar un favorito
			  eliminarFavorito: (uid) => {
				const store = getStore();
				// Filtra el favorito a eliminar
				const nuevosFavoritos = store.ArrayFavoritos.filter(fav => fav.uid !== uid);
				setStore({ ArrayFavoritos: nuevosFavoritos });
			  
				// Guarda en localStorage
				localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
			  },

			// Función para cargar los favoritos desde localStorage
			cargarFavoritosDesdeLocalStorage: () => {
				const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos'));
				if (favoritosGuardados) {
					setStore({ ArrayFavoritos: favoritosGuardados });
				}
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};


export default getState;
