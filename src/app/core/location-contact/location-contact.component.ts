import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CopyRightComponent } from '../../widgets/copy-right/copy-right.component';

@Component({
  selector: 'app-location-contact',
  standalone: true,
  imports: [NgOptimizedImage, CopyRightComponent],
  templateUrl: './location-contact.component.html',
  styles: ``
})
export class LocationContactComponent {

}
