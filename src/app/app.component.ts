import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ben';

  gameSize = 8;
  xs = Array.from(Array(this.gameSize));
  ys = Array.from(Array(this.gameSize));

  ngOnInit() {
    console.log(this.xs, this.ys);
  }
}
