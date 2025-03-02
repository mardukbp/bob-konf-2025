import { Component, computed, signal } from '@angular/core';
import { TabBarComponent } from './tab-bar/tab-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // windowWidth = window.innerWidth;
  // isMobile = window.innerWidth <= 480;

  windowWidth = signal(window.innerWidth);
  isMobile = computed(() =>
    this.windowWidth() <= 480
  );

  constructor() {
    document.addEventListener('resize', () => {
      this.windowWidth.set(window.innerWidth)
    });

    console.log(this.isMobile());
    // document.addEventListener('resize', () => {
    //   this.windowWidth = window.innerWidth;
    //   this.isMobile = window.innerWidth <= 480;
    // });
  }
}
