import { Injectable } from '@angular/core';
import { Hero } from '../Hero';
import { HeroesList } from '../mock-heroes-list';

@Injectable()
export class HeroService {

  constructor() { }

  getHeros(): Hero[] {
    return HeroesList;
  }

}
