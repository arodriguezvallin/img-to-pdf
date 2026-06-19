import { Component } from '@angular/core';
import { UploadImageComponent } from '../../common/upload-image/upload-image.component';
import { ImageGridComponent } from '../../common/image-grid/image-grid.component';

@Component({
  selector: 'app-main-process',
  standalone: true,
  imports: [UploadImageComponent, ImageGridComponent],
  templateUrl: './main-process.component.html',
  styleUrl: './main-process.component.scss',
})
export class MainProcessComponent {
  files: File[] = [];

  onExportFile(files: File[]) {
    this.files = files;
  }
}
