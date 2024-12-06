import {Component, ElementRef, ViewChild} from '@angular/core';
import {PageFooterComponent} from '../../basic-input/page-footer/page-footer.component';
import {PageHeaderComponent} from '../../basic-input/page-header/page-header.component';
import {StatusBoxComponent} from '../../basic-input/status-box/status-box.component';
import {ImagesService} from './images.service';
import {CommonModule, NgForOf} from '@angular/common';
import {ModalComponent} from '../../basic-input/modal/modal.component';

@Component({
  selector: 'app-gallery',
  imports: [
    PageFooterComponent,
    PageHeaderComponent,
    StatusBoxComponent,
    NgForOf,
    ModalComponent
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  @ViewChild('imageContainer', { static: false }) imageContainer!: ElementRef;

  images: string[] = [];
  showModal: boolean = false;
  selectedImage: string | null = null;

  constructor(private imageService: ImagesService) {}
  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  onImageClick(event: any): void {
    
  }


  openModal(imageSrc: string) {
    this.selectedImage = imageSrc;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedImage = null;
  }
}
