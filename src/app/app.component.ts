import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  isAuth = false;
  appareilOne = 'Machine à laver';
  appareilTwo = 'Televiseur';
  appareilThree = 'Ordinateur';
  appareilFour = 'Seche linge';
  title = 'AngularTuto test';

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('un petit clic');
  }
}
