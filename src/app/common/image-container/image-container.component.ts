import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image-container',
  standalone: true,
  imports: [],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.scss',
})
export class ImageContainerComponent {
  imageUrl = input<string>();
}
