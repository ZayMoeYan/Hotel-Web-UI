import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-deluxe',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './deluxe.component.html',
  styles: ``
})
export class DeluxeComponent {

}
