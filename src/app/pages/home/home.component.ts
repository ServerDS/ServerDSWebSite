import { Component } from '@angular/core';
import {PageHeaderComponent} from '../../basic-input/page-header/page-header.component';
import {PageFooterComponent} from '../../basic-input/page-footer/page-footer.component';

@Component({
  selector: 'app-home',
  imports: [
    PageHeaderComponent,
    PageFooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
