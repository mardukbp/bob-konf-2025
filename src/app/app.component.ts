import { Component, ElementRef, viewChild } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly draggable = viewChild<ElementRef>('draggable');
  readonly draggableAvailable = toObservable(this.draggable).pipe(
    filter(elementRef => !!elementRef),
    map(elementRef => elementRef.nativeElement)
  );
}
