import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//módulos de componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

// módulos de angular materials

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobreMiComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
