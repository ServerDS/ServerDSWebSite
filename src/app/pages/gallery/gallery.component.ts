import {Component, ElementRef, ViewChild, ChangeDetectionStrategy, effect, viewChild} from '@angular/core';
import {PageFooterComponent} from '../../basic-input/page-footer/page-footer.component';
import {PageHeaderComponent} from '../../basic-input/page-header/page-header.component';
import {StatusBoxComponent} from '../../basic-input/status-box/status-box.component';
import {ImagesService} from './images.service';

import {ModalComponent} from '../../basic-input/modal/modal.component';
import {GalleryComponent, ImageItem} from 'ng-gallery';
import {GallerizeDirective, LightboxDirective} from 'ng-gallery/lightbox';

@Component({
  selector: 'app-gallery',
  imports: [
    PageFooterComponent,
    PageHeaderComponent,
    StatusBoxComponent,
    ModalComponent,
    GalleryComponent,
    LightboxDirective,
    GallerizeDirective
  ],
  templateUrl: './gallery.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './gallery.component.scss'
})
export class PageGalleryComponent {
  @ViewChild('imageContainer', {static: false}) imageContainer!: ElementRef;

  imageItems: ImageItem[] = [];
  images: string[] = [];
  showModal: boolean = false;
  selectedImage: string | null = null;

  constructor(private imageService: ImagesService) {
  }

  ngOnInit() {
    this.images = this.imageService.getImages();

    this.images.forEach(image => {
      this.imageItems.push(new ImageItem({src: image, thumb: image}));
    })
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
