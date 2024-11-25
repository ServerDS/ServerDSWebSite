import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "./side-bar/side-bar.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import {ButtonComponent} from './basic-input/button/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent, TopBarComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ServerDSWebSite';
}
