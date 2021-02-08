import { Component, HostListener, Injectable, OnInit } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

interface Point {
  x: number;
  y: number;
}

interface Player {
  location: Point;
  health: number;
  name: string;
}

interface GameState {
  player1: Player;
  player2: Player;
  shot1: Point;
  shot2: Point;
}

@Injectable()
export class GameStore extends ComponentStore<GameState> {
  constructor() {
    super();
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  gameSize = 8;
  xs = Array.from(Array(this.gameSize));
  ys = Array.from(Array(this.gameSize));

  ngOnInit() {}

  onTap(event: any) {
    const isRobot1 = event.center.x < this.windowWidth / 2;
    if (isRobot1) {
      this.robot1 = event.center.y;
      timer(1000, 3000)
        .pipe(take(2))
        .subscribe((i) => {
          this.shot1 = i === 0 ? this.windowWidth : -1;
        });
    } else {
      this.robot2 = event.center.y;
      timer(1000, 3000)
        .pipe(take(2))
        .subscribe((i) => {
          this.shot2 = i === 0 ? this.windowWidth : -1;
        });
    }
  }

  windowWidth = window.innerWidth;
  robot1 = 200;
  robot2 = 200;
  shot1 = -100;
  shot2 = -100;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }
}
