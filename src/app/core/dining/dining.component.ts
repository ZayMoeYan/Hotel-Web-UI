import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CopyRightComponent } from '../../widgets/copy-right/copy-right.component';

@Component({
  selector: 'app-dining',
  standalone: true,
  imports: [NgOptimizedImage, CopyRightComponent],
  templateUrl: './dining.component.html',
  styles: ``
})
export class DiningComponent {

}
