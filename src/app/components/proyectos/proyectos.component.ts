import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/interfaces/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  animate: boolean = true;

  proyectos: proyecto[];

  constructor(private proyectoService: ProyectoService) {
    this.proyectos = this.proyectoService.getProyectos();
  }



  ngOnInit() {
    setTimeout(() => {
      this.animate = false;
    }, 5000);


  }
}
