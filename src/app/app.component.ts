import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  _opened = false;

  constructor() {}

  ngOnInit() {}

  _toggleSidebar() {
    this._opened = !this._opened;
  }
}
