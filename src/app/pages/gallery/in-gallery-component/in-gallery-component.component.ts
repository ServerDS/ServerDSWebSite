import {Component, ElementRef, ViewChild, ChangeDetectionStrategy, effect, viewChild} from '@angular/core';
import {OnInit} from '@angular/core';
import {GalleryModule, GalleryComponent, ImageItem} from 'ng-gallery';
import {ImagesService} from '../images.service';

@Component({
  template: `
    <gallery></gallery>
  `,
  standalone: true,
  imports: [GalleryModule]
})
export class InGalleryComponent {
  // Returns a Signal that automatically tracks the component
  gallery = viewChild(GalleryComponent);
  private images: string[];


  constructor(private imageService: ImagesService) {
    this.images = this.imageService.getImages();
    print("hi");
    // Runs automatically as soon as the gallery Signal resolves
    effect(() => {
      const galleryInstance = this.gallery();
      if (galleryInstance) {
        let imageItems: ImageItem[] = [];
        this.images.forEach(image => {
          imageItems.push(new ImageItem({src: image, thumb: image}));
        })

        galleryInstance.load(imageItems);
      }
    });
  }
}
