import { Injectable } from "@angular/core";
import { proyecto } from "../interfaces/proyecto";

@Injectable({
    providedIn: 'root'
})
export class ProyectoService {
    listaProyectos: proyecto[] = [
        { imagen: 'assets/macart.JPG', nombre: 'Macart', url: 'https://macart.onrender.com/', descripcion: 'E-commerce dedicado a la venta de prendas de vestir nuevas y usadas.' },
        { imagen: 'assets/homebanking.JPG', nombre: 'MindHub Brothers', url: 'https://homebanking-oeo3.onrender.com/', descripcion: 'Homebanking es un sitio web que brinda servicios bancarios en línea a los clientes.' },
        { imagen: 'assets/oso_fermentados.jpeg', nombre: 'Fermentados', url: 'https://github.com/JsantiAristi/s-sfermentados_front', descripcion: 'E-commerce dedicado a la venta de vinos, macerados y cervezas.' },
        { imagen: 'assets/web_scraping.JPG', nombre: 'Web scraping', url: 'https://github.com/carlosandresgoo/Web-scraping', descripcion: ' Programa dedicado a extrar información de sitios web de manera automatizada.' },
        { imagen: 'assets/petshop.JPG', nombre: 'Petshop-Patitas', url: 'https://patitas-petshop.netlify.app/pages/juguetes', descripcion: 'E-commerce dedicado a la venta de  productos veterinarios para mascotas.' },

    ];
    constructor() { }

    getProyectos() {
        return this.listaProyectos;
    }
}