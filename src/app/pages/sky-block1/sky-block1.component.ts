import { Component } from '@angular/core';
import {PageFooterComponent} from '../../basic-input/page-footer/page-footer.component';
import {PageHeaderComponent} from '../../basic-input/page-header/page-header.component';
import {StatusBoxComponent} from '../../basic-input/status-box/status-box.component';

@Component({
  selector: 'app-sky-block1',
  imports: [
    PageFooterComponent,
    PageHeaderComponent,
    StatusBoxComponent
  ],
  templateUrl: './sky-block1.component.html',
  styleUrl: './sky-block1.component.scss'
})
export class SkyBlock1Component {

}
