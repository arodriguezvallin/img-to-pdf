import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-image-container',
    imports: [],
    templateUrl: './image-container.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './image-container.component.scss'
})
export class ImageContainerComponent {
  imageUrl = input<string>();
}
