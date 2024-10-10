import { IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CopyRightComponent } from '../../widgets/copy-right/copy-right.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, CopyRightComponent, RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
