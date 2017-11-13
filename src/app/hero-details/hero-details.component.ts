import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {Hero} from '../Hero'

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
  //encapsulation: ViewEncapsulation.None -?
})
export class HeroDetailsComponent implements OnInit {
  // @Input binds HeroDetailsComponent with hero, the obejct hero will be passed from outer component or parent component.
 
  constructor() { }

  ngOnInit() {
  }
  @Input() hero:Hero;

}
