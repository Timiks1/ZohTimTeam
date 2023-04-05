import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  currentSlide = 0;

  nextSlide() {
    this.currentSlide = 0;
  }
  

  prevSlide() {
    this.currentSlide = 1;
  }
  nextSlide3() {
    this.currentSlide =  2;
  }
}
