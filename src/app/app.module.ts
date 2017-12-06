import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroService } from './services/hero.service';

/**
 * imports :  contains a list of external module which app needs.
 * providers : The providers array tells Angular to create a single, shared instance
 * of HeroService and inject into any class that asks for it
 */
@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
