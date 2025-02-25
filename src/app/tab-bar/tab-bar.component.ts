import { Component, computed, effect, ElementRef, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent, map } from 'rxjs';

const minTabWidth = 80;
const maxTabWidth = 280;
const shrunkTabWidth = 44;

@Component({
  selector: 'app-tab-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss'
})
export class TabBarComponent {
  protected newTabButton = viewChild<ElementRef<HTMLButtonElement>>('newTabButton');
  protected readonly tabs = signal<string[]>(['tab1', 'tab2', 'reallyLongTabName', 'tab3', 'tab4', 'reallyLongTabNameThatIsEvenLonger']);

  readonly windowWidth = toSignal(
    fromEvent(window, 'resize').pipe(
      map(event => (event.target as Window).innerWidth)
    ),
    {initialValue: window.innerWidth}
  );
  readonly isMobile = computed(() => this.windowWidth() <= 480);

  protected readonly tabWidth = computed(() => {
    const responsiveWidth = this.windowWidth() / this.tabs().length;
    if (responsiveWidth < minTabWidth) return shrunkTabWidth;
    if (responsiveWidth > maxTabWidth) return maxTabWidth;
    return responsiveWidth;
  });

  readonly visibleTabsLimit = computed(() =>
    Math.floor(this.windowWidth() / this.tabWidth())
  );

  constructor() {
    effect(() => {
      console.log('tabwidth', this.tabWidth());
    });
  }
}
