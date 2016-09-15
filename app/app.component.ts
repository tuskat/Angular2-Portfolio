import { Component } from '@angular/core';
import { Slide } from './slide';
import { SLIDES } from './mock-slide'

/*
@Component({
  selector: 'my-app',
  template: `<h1 class="title">{{title}}</h1>
  <ul>
  <li  *ngFor="let slide of slides">
     <div class="slide animated fadeinDown" id="slide.id">
     <img src="{{slide.source}}" />
     <h2>{{slide.title}}</h2>
     </div>
     </li>
     </ul>
  `

})
*/

@Component({
  selector: 'my-app',
  template: `
  <div class="header"><h1 class="title">{{title}}</h1></div>
  <div class="content">
  <slider-detail  *ngFor="let slide of slides" [slide]="slide" class="detail" (click)="detail(slide)"></slider-detail>
  </div>
  <slider-description [slide]="selectedSlide"></slider-description>
  <div class="footer">
  <p>Cedric Marcellin - 2016</p>
  </div>
  `

})

export class AppComponent {
  title = "Portfolio";
  slides = SLIDES;
  //selectedSlide : Slide;
  selectedSlide = SLIDES[0];
   detail(slide : Slide) : void {
      this.selectedSlide = slide;
   document.getElementsByClassName('content')[0].className="content flipped";
    var description = document.getElementById('description');
    if (description)
      description.className ="slide-description flipped" 
       window.scrollTo(0, document.body.clientHeight *0.25);
  }
}