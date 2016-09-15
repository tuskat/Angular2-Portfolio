import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SliderDetailComponent } from './slider-detail.component'
import { SliderDescriptionComponent } from './slider-description.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent,
    SliderDetailComponent,
    SliderDescriptionComponent,]
    ,
  bootstrap: [AppComponent]
})
export class AppModule { }