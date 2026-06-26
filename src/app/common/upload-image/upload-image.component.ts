import { Component, ElementRef, output, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-upload-image',
    imports: [],
    templateUrl: './upload-image.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './upload-image.component.scss'
})
export class UploadImageComponent {
  // ViewChild grabs a reference to the hidden <input #imageInput> in the template so we can control it from the class
  @ViewChild('imageInput') imageInput!: ElementRef;

  isDragging = false;

  // output() sends data to the parent component — the parent listens with (exportFile)="..." in its template
  exportFile = output<File[]>();

  openSelectImages() {
    // console.log('openSelectImages');
    // nativeElement.click() programmatically triggers a click on the hidden file input, opening the OS file dialog
    this.imageInput.nativeElement.click();
  }

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    // console.log(input.files);
    // emit() fires the output event, sending the selected files array up to the parent component
    this.exportFile.emit(Array.from(input.files!));
  }

  dragOver(event: DragEvent) {
    // preventDefault() stops the browser's default behavior (navigating to the dropped file)
    event.preventDefault();
  }

  drop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    // dataTransfer.files contains the files the user dropped onto the element
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
