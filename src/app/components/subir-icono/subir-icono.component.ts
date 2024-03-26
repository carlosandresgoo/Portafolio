import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subir-icono',
  templateUrl: './subir-icono.component.html',
  styleUrls: ['./subir-icono.component.css']
})
export class SubirIconoComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  // Método que sube todo el scroll de la página
  subir() {
    window.scrollTo({ top: 0, left: 0 });
  }

}
