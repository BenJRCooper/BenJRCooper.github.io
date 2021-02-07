import { Component, HostListener, OnInit } from '@angular/core';

interface Point {
  x: number;
  y: number;
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

  player1: Point = {
    x: 0,
    y: 2,
  };
  player2: Point = {
    x: 7,
    y: 2,
  };
  shot1: Point = {
    x: 1,
    y: 1,
  };

  ngOnInit() {
    console.log(this.xs, this.ys);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    switch (event.code) {
      case 'ArrowUp':
        this.player1.y = Math.max(0, this.player1.y - 1);
        break;
      case 'ArrowDown':
        this.player1.y = Math.min(this.player1.y + 1, this.gameSize - 1);
        break;
      case 'ArrowLeft':
        this.player1.x = Math.max(0, this.player1.x - 1);
        break;
      case 'ArrowRight':
        this.player1.x = Math.min(this.player1.x + 1, this.gameSize - 1);
        break;
    }
  }
}
