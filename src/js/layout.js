import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Personajes } from "./views/Personajes.jsx";
import { Planetas } from "../js/views/Planetas.jsx";
import { Vehiculos } from "./views/Vehiculos.jsx";
import { Vistaspersonajes } from "./views/Vistaspersonajes.jsx";
import { VistasPlanetas } from "./views/VistasPlanetas.jsx";
import { VistasVehiculos } from "./views/VistaVehiculo.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
					<Route path= "/" element={<Home />} />
        				<Route path="/single/:theId" element={ <Single />} />
        				<Route path="/demo" element={<Demo />} />
        				<Route path="/Personajes" element={<Personajes/>} />
        				<Route path="/Planetas" element={<Planetas/>} />
        				<Route path="/vehiculos" element={<Vehiculos/>} />
						<Route path="/vistaspersonajes/:id" element={<Vistaspersonajes/>} />
						<Route path="/vistasplanetas/:id" element={<VistasPlanetas/>} />
						<Route path="/vistasvehiculos/:id" element={<VistasVehiculos/>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
