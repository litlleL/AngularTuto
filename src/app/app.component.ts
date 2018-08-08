import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
        setTimeout(
          () => {
            resolve(date);
        }, 2000);
    }
  );
  appareils = [
    {
      name: 'Machine à laver',
      status : 'allumé'
    },
    {
      name: 'Ordinateur',
      status : 'éteint'
    },
    {
      name: 'Télévision',
      status : 'allumé'
    }
  ];

 
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
