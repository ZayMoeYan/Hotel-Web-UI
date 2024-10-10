import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CopyRightComponent } from '../../../widgets/copy-right/copy-right.component';

@Component({
  selector: 'app-superior',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, CopyRightComponent],
  templateUrl: './superior.component.html',
  styles: ``
})
export class SuperiorComponent {

}
