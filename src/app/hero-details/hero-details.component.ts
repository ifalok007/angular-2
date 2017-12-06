import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {Hero} from '../Hero';
/**
 * ngModel directive is part of
 */
@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
  // encapsulation: ViewEncapsulation.None -?
})
export class HeroDetailsComponent implements OnInit {
  // @Input binds HeroDetailsComponent with hero, the obejct hero will be passed from outer component or parent component.
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }
}
