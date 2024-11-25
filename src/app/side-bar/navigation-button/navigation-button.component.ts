import {Component, ElementRef, Input, Renderer2} from '@angular/core';

@Component({
  selector: 'app-navigation-button',
  imports: [],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss'
})
export class NavigationButtonComponent {
  constructor(private renderer: Renderer2) {}

  @Input()
  get text(): string {
    return this._text;
  }
  set text(text: string) {
    this._text = text;
  }
  public _text = '';

  @Input()
  get icon(): string {
    return this._icon;
  }
  set icon(icon: string) {
    this._icon = icon;
  }
  public _icon = '';




  changeColor(event: any) {
    const elements = document.querySelectorAll("app-navigation-button");

    elements.forEach(element => {
      if (element === event.target.parentElement) {
        this.renderer.addClass(element, 'selected');
      } else {
        this.renderer.removeClass(element, 'selected');
      }
    });


    const menu_elements = document.querySelectorAll("app-navigation-menu");

    menu_elements.forEach(menu_element => {
      let found: boolean = false;
      menu_element.querySelectorAll("app-navigation-button").forEach(element => {
        if (found) return;
        if (element === event.target.parentElement) {
          this.renderer.addClass(menu_element.querySelector("button"), 'selected');
          found = true;

        } else {
          this.renderer.removeClass(menu_element.querySelector("button"), 'selected');
        }
      });
    });
  }




}
