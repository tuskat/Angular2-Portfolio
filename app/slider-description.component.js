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
var slide_1 = require('./slide');
var SliderDescriptionComponent = (function () {
    function SliderDescriptionComponent() {
    }
    SliderDescriptionComponent.prototype.dismiss = function (event) {
        document.getElementsByClassName('content')[0].className = "content";
        document.getElementById('description').className = "slide-description";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', slide_1.Slide)
    ], SliderDescriptionComponent.prototype, "slide", void 0);
    SliderDescriptionComponent = __decorate([
        core_1.Component({
            selector: 'slider-description',
            template: "\n  <div *ngIf=\"slide\" id=\"description\" class=\"slide-description\">\n  <a class=\"dismiss\" (click)=\"dismiss()\">X</a>\n  <h2>{{slide.title}}</h2>\n  <img src={{slide.source}} />\n  <p>{{slide.description}}</p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SliderDescriptionComponent);
    return SliderDescriptionComponent;
}());
exports.SliderDescriptionComponent = SliderDescriptionComponent;
//# sourceMappingURL=slider-description.component.js.map