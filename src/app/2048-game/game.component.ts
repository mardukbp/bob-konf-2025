import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { filter, fromEvent, map, scan } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { initialGrid, moves, tileColors } from './game-logic';

@Pipe({
  name: 'tileColor', standalone: true
})
class TileColorPipe implements PipeTransform {
  transform(value: number): {[key: string]: string} {
    return {
      backgroundColor: tileColors[value] || '#cdc1b4',
      color: value > 4 ? '#f9f6f2' : '#776e65',
    };
  }
}

@Component({
  selector: 'app-declarative',
  standalone: true,
  imports: [
    CommonModule,
    TileColorPipe
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  readonly moveInputs = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.key.toLowerCase()),
    filter((key): key is 'w'|'a'|'s'|'d' => ['w', 'a', 's', 'd'].includes(key))
  );

  readonly grid = toSignal(
    this.moveInputs.pipe(
      scan(
        (currentGrid, direction) => moves[direction](currentGrid),
        initialGrid
      )
    ), {initialValue: initialGrid}
  );

}
