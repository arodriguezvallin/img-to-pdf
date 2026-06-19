import { Component, computed, input } from '@angular/core';
import { ImageContainerComponent } from '../image-container/image-container.component';

@Component({
  selector: 'app-image-grid',
  standalone: true,
  imports: [ImageContainerComponent],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.scss',
})
export class ImageGridComponent {
  imagesArray = input<File[]>();

  // returnImageUrl(file: File) {
  //   return URL.createObjectURL(file);
  // }

  imageUrl = computed(() =>
    this.imagesArray()?.map((file) => URL.createObjectURL(file)),
  );
}
