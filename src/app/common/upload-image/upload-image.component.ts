import { Component, ElementRef, output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss',
})
export class UploadImageComponent {
  @ViewChild('imageInput') imageInput!: ElementRef;

  isDragging = false;

  exportFile = output<File[]>();

  openSelectImages() {
    // console.log('openSelectImages');
    this.imageInput.nativeElement.click();
  }

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    // console.log(input.files);
    this.exportFile.emit(Array.from(input.files!));
  }

  dragOver(event: DragEvent) {
    event.preventDefault();
  }

  drop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    this.exportFile.emit(Array.from(event.dataTransfer!.files));
  }

  dragEnter(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  dragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }
}
