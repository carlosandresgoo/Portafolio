import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//módulos de componentes
import { AppComponent } from './app.component';
import { Iniciocomponents } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';

// módulos de angular materials




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Iniciocomponents,
    ProyectosComponent,
    ContactoComponent,
    SobreMiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
