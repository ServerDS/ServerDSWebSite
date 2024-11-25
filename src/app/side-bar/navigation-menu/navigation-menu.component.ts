import {Component, ElementRef, HostBinding, Input, Renderer2, ViewChild} from '@angular/core';
import {style} from '@angular/animations';

@Component({
  selector: 'app-navigation-menu',
  imports: [],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss'
})
export class NavigationMenuComponent {
  @ViewChild('content', { static: false }) content_element!: ElementRef;

  public _active: boolean = false;



  update() {
    if (this.content_element.nativeElement) {
      if (this._active) {
        this.content_element.nativeElement.style.maxHeight = this.content_element.nativeElement.scrollHeight + "px";
      } else {
        this.content_element.nativeElement.style.maxHeight = "0px"
      }
    }
  }
  toggle() {
    this._active = !this._active;
    this.update();
  }

  ngAfterViewInit() {
    if (this._active) {
      this.content_element.nativeElement.style.maxHeight = "100%";
    }
  }







  @Input()
  get active(): boolean {
    return this._active;
  }
  set active(active: string) {
    this._active =  booleanify(active);
  }


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


}

const booleanify = (value: string): boolean => {
  const truthy: string[] = [
    'true',
    'True',
    '1'
  ]

  return truthy.includes(value)
}
