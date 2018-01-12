import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Tour of Heroes';

  public user = {
    id: 2,
    name: 'Aruna'
  }

  constructor() {

  }

  public renameuser($event) {
    console.log($event, 22222)
  }
}
