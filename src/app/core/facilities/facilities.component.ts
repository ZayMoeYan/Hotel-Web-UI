import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CopyRightComponent } from '../../widgets/copy-right/copy-right.component';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [NgOptimizedImage, CopyRightComponent],
  templateUrl: './facilities.component.html',
  styles: ``
})
export class FacilitiesComponent {

}
