"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mock_slide_1 = require('./mock-slide');
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
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Portfolio";
        this.slides = mock_slide_1.SLIDES;
        //selectedSlide : Slide;
        this.selectedSlide = mock_slide_1.SLIDES[0];
    }
    AppComponent.prototype.detail = function (slide) {
        this.selectedSlide = slide;
        document.getElementsByClassName('content')[0].className = "content flipped";
        var description = document.getElementById('description');
        if (description)
            description.className = "slide-description flipped";
        window.scrollTo(0, document.body.clientHeight * 0.25);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"header\"><h1 class=\"title\">{{title}}</h1></div>\n  <div class=\"content\">\n  <slider-detail  *ngFor=\"let slide of slides\" [slide]=\"slide\" class=\"detail\" (click)=\"detail(slide)\"></slider-detail>\n  </div>\n  <slider-description [slide]=\"selectedSlide\"></slider-description>\n  <div class=\"footer\">\n  <p>Cedric Marcellin - 2016</p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map