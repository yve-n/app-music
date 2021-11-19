import { Component } from '@angular/core';
import { interval, map, Observable, take} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-music';
  count: Observable<number>;
  time: string;

  constructor(){

    // interval envoi toutes les secondes un compteur 1, 2, ...
    this.count = interval(1000);

    const interval$ = this.count.
      pipe(
        map(num => {
          let hours = Math.floor(num / 3600);
          let minutes = Math.floor(num / 60);

          return `${hours} h ${minutes - hours * 60} min ${num - minutes * 60} s`
        }),
        take(12 * 60 * 3) // permet d'arrêter ici au bout de 12*3 minutes interval particulier à interval
      )

      // on souscrit à l'Observable interval
    interval$.subscribe(
      num => this.time = num
    );
     
  }
  
}
