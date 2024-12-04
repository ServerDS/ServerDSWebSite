import { Routes } from '@angular/router';
import {Error404Component} from './pages/error404/error404.component';
import {HomeComponent} from './pages/home/home.component';
import {Season7Component} from './pages/season7/season7.component';
import {GalleryComponent} from './pages/gallery/gallery.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "gallery",
    component: GalleryComponent
  },
  {
    path: "season7",
    redirectTo: 'season7/home',
    pathMatch: 'full',
  },
  {
    path: "season7/home",
    component: Season7Component
  },
  {
    path: "**",
    component: Error404Component
  }
];
