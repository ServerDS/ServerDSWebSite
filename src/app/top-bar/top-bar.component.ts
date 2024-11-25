import {Component, Renderer2} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-top-bar',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  constructor(private renderer: Renderer2) {}

  public state: boolean = true;


  toggle_state(state: boolean) {
    var aside = document.querySelector("app-side-bar")
    console.log(state)

    if (aside == null) {return}

    if (state) {
      this.renderer.addClass(aside, "state")
    } else {
      this.renderer.removeClass(aside, "state")
    }
    this.state = state;
  }
  toggle() {
    this.toggle_state(!this.state);
  }
}
