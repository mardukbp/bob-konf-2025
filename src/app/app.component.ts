import { Component } from '@angular/core';
import { TabBarComponent } from './tab-bar/tab-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bob-konf-2025';
}
