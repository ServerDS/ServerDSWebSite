import { Component, ChangeDetectionStrategy } from '@angular/core';
import {PageFooterComponent} from "../../basic-input/page-footer/page-footer.component";
import {PageHeaderComponent} from "../../basic-input/page-header/page-header.component";
import {StatusBoxComponent} from "../../basic-input/status-box/status-box.component";

@Component({
  selector: 'app-season9',
    imports: [
        PageFooterComponent,
        PageHeaderComponent,
        StatusBoxComponent
    ],
  templateUrl: './season9.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './season9.component.scss',
})
export class Season9Component {

}
