import {Component, Input, Renderer2} from '@angular/core';
import {NavigationButtonComponent} from './navigation-button/navigation-button.component';
import {NavigationMenuComponent} from './navigation-menu/navigation-menu.component';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [
    NavigationButtonComponent,
    NavigationMenuComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  constructor(private renderer: Renderer2) {}


  ngAfterViewInit() { window.onload = () => { this.runAfterLoad(); }; }

  runAfterLoad() {

    const menu_elements = document.querySelectorAll("app-navigation-menu");

    console.log(menu_elements);

    menu_elements.forEach(menu_element => {
      let found: boolean = false;
      menu_element.querySelectorAll("app-navigation-button").forEach(element => {
        console.log(element, element.classList.contains("selected"));
        if (found) return;
        if (element.classList.contains("selected")) {
          console.log(menu_element);
          this.renderer.addClass(menu_element.querySelector("button"), 'selected');

          //menu_element.getElementsByClassName("content-box")[0].classList.add("selected");

          found = true;

        } else {
          this.renderer.removeClass(menu_element.querySelector("button"), 'selected');
        }
      });
    });


  }

  toggleDropdown(button: any) {
    console.log(button)
    const dropbox = button.parentElement;
    const content = (dropbox.querySelector('.dropbox-content') as Element);

    // Закрытие других выпадающих списков
    /*document.querySelectorAll('.dropbox').forEach(otherDropbox => {
      const otherContent = otherDropbox.querySelector('.dropbox-content');
      if (otherDropbox !== dropbox) {
        otherDropbox.classList.remove('active');
        otherContent.style.maxHeight = null;
      }
    });
  */
    // Переключение класса активного состояния на родительском элементе
    dropbox.classList.toggle('active');

    if (dropbox.classList.contains('active')) {
      (content as HTMLElement).style.maxHeight = content.scrollHeight + "px";
    } else {
      (content as HTMLElement).style.maxHeight = "0";
    }
  }
}



document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.dropbox.active .dropbox-content').forEach(content => {
      (content as HTMLElement).style.maxHeight = content.scrollHeight + "px";


  });

});
