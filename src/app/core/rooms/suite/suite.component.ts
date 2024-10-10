import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-suite',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './suite.component.html',
  styles: ``
})
export class SuiteComponent {

}
