import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  imports: [
    NgClass,
    NgIf
  ],
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() showModal: boolean = false;
  @Input() imageSrc: string | null = null;
  @Output() closeEvent = new EventEmitter<void>();

  close() {
    this.closeEvent.emit();
  }
}
