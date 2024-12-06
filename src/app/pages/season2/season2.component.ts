import { Component } from '@angular/core';
import {PageFooterComponent} from "../../basic-input/page-footer/page-footer.component";
import {PageHeaderComponent} from "../../basic-input/page-header/page-header.component";
import {StatusBoxComponent} from "../../basic-input/status-box/status-box.component";

@Component({
  selector: 'app-season2',
    imports: [
        PageFooterComponent,
        PageHeaderComponent,
        StatusBoxComponent
    ],
  templateUrl: './season2.component.html',
  styleUrl: './season2.component.scss'
})
export class Season2Component {

}
