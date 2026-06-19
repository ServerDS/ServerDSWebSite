import { Component, ChangeDetectionStrategy } from '@angular/core';
import {PageFooterComponent} from "../../basic-input/page-footer/page-footer.component";
import {PageHeaderComponent} from "../../basic-input/page-header/page-header.component";
import {StatusBoxComponent} from "../../basic-input/status-box/status-box.component";

@Component({
  selector: 'app-season3',
    imports: [
        PageFooterComponent,
        PageHeaderComponent,
        StatusBoxComponent
    ],
  templateUrl: './season3.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './season3.component.scss'
})
export class Season3Component {

}
