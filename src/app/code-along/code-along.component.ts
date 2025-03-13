import { Component, ElementRef, viewChild } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-code-along',
  standalone: true,
  imports: [],
  templateUrl: './code-along.component.html',
  styleUrl: './code-along.component.scss'
})
export class CodeAlongComponent {
  readonly draggable = viewChild<ElementRef>('draggable');
  readonly draggableAvailable = toObservable(this.draggable).pipe(
    filter(elementRef => !!elementRef),
    map(elementRef => elementRef.nativeElement)
  );

  constructor() {
    this.draggableAvailable.subscribe(draggable => {
      console.log('draggable available', draggable);
    });
  }
}
