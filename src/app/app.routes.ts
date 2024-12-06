import { Routes } from '@angular/router';
import {Error404Component} from './pages/error404/error404.component';
import {HomeComponent} from './pages/home/home.component';
import {Season7Component} from './pages/season7/season7.component';
import {GalleryComponent} from './pages/gallery/gallery.component';
import {Season1Component} from './pages/season1/season1.component';
import {Season2Component} from './pages/season2/season2.component';
import {Season3Component} from './pages/season3/season3.component';
import {Season4Component} from './pages/season4/season4.component';
import {Season5Component} from './pages/season5/season5.component';
import {Season6Component} from './pages/season6/season6.component';
import {SkyBlock1Component} from './pages/sky-block1/sky-block1.component';

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
    path: "season1",
    redirectTo: 'season1/home',
    pathMatch: 'full',
  },
  {
    path: "season1/home",
    component: Season1Component
  },

  {
    path: "season2",
    redirectTo: 'season2/home',
    pathMatch: 'full',
  },
  {
    path: "season2/home",
    component: Season2Component
  },

  {
    path: "season3",
    redirectTo: 'season3/home',
    pathMatch: 'full',
  },
  {
    path: "season3/home",
    component: Season3Component
  },

  {
    path: "season4",
    redirectTo: 'season4/home',
    pathMatch: 'full',
  },
  {
    path: "season4/home",
    component: Season4Component
  },

  {
    path: "season5",
    redirectTo: 'season5/home',
    pathMatch: 'full',
  },
  {
    path: "season5/home",
    component: Season5Component
  },

  {
    path: "sky-block1",
    redirectTo: 'sky-block1/home',
    pathMatch: 'full',
  },
  {
    path: "sky-block1/home",
    component: SkyBlock1Component
  },

  {
    path: "season6",
    redirectTo: 'season6/home',
    pathMatch: 'full',
  },
  {
    path: "season6/home",
    component: Season6Component
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
