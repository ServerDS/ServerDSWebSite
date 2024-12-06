import { Component } from '@angular/core';
import {PageFooterComponent} from '../../basic-input/page-footer/page-footer.component';
import {PageHeaderComponent} from '../../basic-input/page-header/page-header.component';
import {StatusBoxComponent} from '../../basic-input/status-box/status-box.component';

@Component({
  selector: 'app-season1',
  imports: [
    PageFooterComponent,
    PageHeaderComponent,
    StatusBoxComponent
  ],
  templateUrl: './season1.component.html',
  styleUrl: './season1.component.scss'
})
export class Season1Component {

}
