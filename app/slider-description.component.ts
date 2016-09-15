import { Component, Input } from '@angular/core';
import { Slide } from './slide';

@Component({
  selector: 'slider-description',
  template: `
  <div *ngIf="slide" id="description" class="slide-description">
  <a class="dismiss" (click)="dismiss()">X</a>
  <h2>{{slide.title}}</h2>
  <img src={{slide.source}} />
  <p>{{slide.description}}</p>
  </div>
  `
})
export class SliderDescriptionComponent {
  @Input() 
  slide: Slide; 
  dismiss(event) {
   document.getElementsByClassName('content')[0].className="content";
    document.getElementById('description').className="slide-description";
   
  }
}