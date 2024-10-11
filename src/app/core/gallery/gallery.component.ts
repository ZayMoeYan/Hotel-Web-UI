import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CopyRightComponent } from '../../widgets/copy-right/copy-right.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgOptimizedImage, CopyRightComponent],
  templateUrl: './gallery.component.html',
  styles: ``
})
export class GalleryComponent {

}
