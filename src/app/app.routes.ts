import { Routes } from '@angular/router';
import { CodeAlongComponent } from './code-along/code-along.component';
import { GameComponent } from './2048-game/game.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'code-along',
    pathMatch: 'full'
  },
  {
    path: 'code-along',
    component: CodeAlongComponent
  },
  {
    path: '2048-game',
    component: GameComponent
  },
  {
    path: 'tab-bar',
    component: TabBarComponent
  }
];
