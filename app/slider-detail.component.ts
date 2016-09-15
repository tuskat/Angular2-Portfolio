import { Component, Input } from '@angular/core';
import { Slide } from './slide';

@Component({
  selector: 'slider-detail',
  template: `
  <div *ngIf="slide" id="{{slide.id}}" class="slide">
  <img src={{slide.tb_source}}/>
  <h2>{{slide.title}}</h2>
  </div>
  `
})
export class SliderDetailComponent {
  @Input() 
  slide: Slide; 
 
}