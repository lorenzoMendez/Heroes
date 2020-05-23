import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Servicios
import { HeroeService } from './services/heroe.service';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeroeDetailComponent } from './components/heroe-detail/heroes-detail.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    FooterComponent,
    HeroeDetailComponent,
    HeroeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // todos los servicios van en los providers
  providers: [
    HeroeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
