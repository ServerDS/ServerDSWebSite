import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private imageFolderGlobal = 'gallery/';

  private imageFolderSeason1 = 'gallery/season1/';
  private imageFolderSeason2 = 'gallery/season2/';

  // Список изображений. Здесь вам нужно вручную указать все изображения.
  private imagesSeason1 = [
    `${this.imageFolderSeason1}1.jpg`,
    `${this.imageFolderSeason1}2.png`,
    `${this.imageFolderSeason1}3.png`,
    `${this.imageFolderSeason1}4.png`,
    `${this.imageFolderSeason1}5.png`,
    `${this.imageFolderSeason1}6.png`,
    `${this.imageFolderSeason1}7.png`,
    `${this.imageFolderSeason1}8.png`,
    `${this.imageFolderSeason1}9.png`,
    `${this.imageFolderSeason1}10.png`,
    `${this.imageFolderSeason1}11.png`,
    `${this.imageFolderSeason1}12.png`,
    `${this.imageFolderSeason1}13.png`,
    `${this.imageFolderSeason1}14.png`,
    `${this.imageFolderSeason1}15.png`,
    `${this.imageFolderSeason1}16.png`,
    `${this.imageFolderSeason1}17.png`,
    `${this.imageFolderSeason1}18.png`,
    `${this.imageFolderSeason1}19.png`,
    `${this.imageFolderSeason1}20.png`,
    `${this.imageFolderSeason1}21.png`,
    `${this.imageFolderSeason1}22.png`,
    `${this.imageFolderSeason1}23.png`,
    `${this.imageFolderSeason1}24.png`,
    `${this.imageFolderSeason1}25.png`,
    `${this.imageFolderSeason1}26.png`,
    `${this.imageFolderSeason1}27.png`,
    `${this.imageFolderSeason1}28.png`,
    `${this.imageFolderSeason1}29.png`,
    `${this.imageFolderSeason1}30.png`,
    `${this.imageFolderSeason1}31.png`,
    `${this.imageFolderSeason1}32.png`,
    `${this.imageFolderSeason1}33.png`,
    `${this.imageFolderSeason1}34.png`,
    `${this.imageFolderSeason1}35.png`,
    `${this.imageFolderSeason1}36.png`,
    `${this.imageFolderSeason1}37.png`,
    `${this.imageFolderSeason1}38.png`,
    `${this.imageFolderSeason1}39.png`,
    `${this.imageFolderSeason1}40.png`,
    `${this.imageFolderSeason1}41.jpg`,
    `${this.imageFolderSeason1}42.png`,
    `${this.imageFolderSeason1}43.png`,

    `${this.imageFolderSeason1}ServerDS.png`,
    `${this.imageFolderSeason1}ServerDS DL.png`,

    `${this.imageFolderSeason1}end_1.png`,
    `${this.imageFolderSeason1}end_2.png`
    // Добавьте больше изображений по необходимости
  ];

  private imagesSeason2 = [
    `${this.imageFolderSeason2}1.png`,
    `${this.imageFolderSeason2}2.png`,
    `${this.imageFolderSeason2}3.png`,
    `${this.imageFolderSeason2}4.png`,
    `${this.imageFolderSeason2}5.png`,
    `${this.imageFolderSeason2}6.png`,
    `${this.imageFolderSeason2}7.png`,
    `${this.imageFolderSeason2}8.png`,
    `${this.imageFolderSeason2}9.png`,
    `${this.imageFolderSeason2}10.png`,
    `${this.imageFolderSeason2}11.png`,
    `${this.imageFolderSeason2}12.png`,
    `${this.imageFolderSeason2}13.jpg`,
    `${this.imageFolderSeason2}14.jpg`,
    `${this.imageFolderSeason2}15.jpg`,
    `${this.imageFolderSeason2}16.jpg`,
    `${this.imageFolderSeason2}17.jpg`,
    `${this.imageFolderSeason2}18.jpg`,
    `${this.imageFolderSeason2}19.jpg`,
    `${this.imageFolderSeason2}20.jpg`,
    `${this.imageFolderSeason2}21.jpg`,
    `${this.imageFolderSeason2}22.jpg`,
    `${this.imageFolderSeason2}23.jpg`,
    `${this.imageFolderSeason2}24.jpg`,
    `${this.imageFolderSeason2}25.jpg`,
    `${this.imageFolderSeason2}26.jpg`,
    `${this.imageFolderSeason2}27.jpg`,
    `${this.imageFolderSeason2}28.jpg`,
    `${this.imageFolderSeason2}29.jpg`,
    `${this.imageFolderSeason2}30.jpg`,
    `${this.imageFolderSeason2}31.jpg`,
    `${this.imageFolderSeason2}32.jpg`,
    `${this.imageFolderSeason2}33.jpg`,
    `${this.imageFolderSeason2}34.jpg`,
    `${this.imageFolderSeason2}35.png`,
    `${this.imageFolderSeason2}36.png`,
    `${this.imageFolderSeason2}37.jpg`,

    `${this.imageFolderSeason2}ServerDS2.png`,
    `${this.imageFolderSeason2}ServerDS2_logo.png`
  ];

  private imageGlobal = [
    `${this.imageFolderGlobal}RTX_simple_Seus_3.png`,
    `${this.imageFolderGlobal}Seus_3.png`
  ];




  getImages(): string[] {
    return (this.imagesSeason1.concat(this.imagesSeason2).concat(this.imageGlobal)).reverse();
  }
}
