import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../Hero'; // an import path can not end with .ts
import { HeroesList } from '../mock-heroes-list';
/*
  Angular components and directives have life cycle hooks like ngOnChanges, ngOnInit, ngDoCheck and ngDestroy etc.
  Developper can use any lifecycle moment by implementing one or more lifecycle hook interfaces in Angular core library.
  for example OnInit interface has ngOnInit() method.After creating a component/directive by calling its constructor, it 
  calls lifecycle hook methods.

  Though to define angular lifecycle methods implementing interface is not required, angular can find and call ngOnInit()
  if its define in a component/directive with or without interfaces.
*/
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
  // encapsulation: ViewEncapsulation.None    -?
})
export class HerosComponent implements OnInit {

  hero: Hero = { id: 1223, latestMovie: 'Justice League', name: 'Liam Nesson' };
  heroes: Hero[] = HeroesList;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {

  }



  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
  }

}
