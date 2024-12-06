import { Component } from '@angular/core';
import {PageFooterComponent} from "../../basic-input/page-footer/page-footer.component";
import {PageHeaderComponent} from "../../basic-input/page-header/page-header.component";
import {StatusBoxComponent} from "../../basic-input/status-box/status-box.component";

@Component({
  selector: 'app-season5',
    imports: [
        PageFooterComponent,
        PageHeaderComponent,
        StatusBoxComponent
    ],
  templateUrl: './season5.component.html',
  styleUrl: './season5.component.scss'
})
export class Season5Component {

}
