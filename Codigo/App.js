// Nuestra aplicacion de mensajeria

import Servicio from "./Servicio.js";


const servicio = new Servicio()

servicio.generarId()
const camion = servicio.obtenerTransporte();
camion.transportar("bogota");