import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  
  showplayer: boolean = false;
  current: number = 1;
  total: number = 1;
  ratio: number = 0;

  album: Album;

  constructor(private albumService : AlbumService) { }

  ngOnInit(): void {
      // souscription au service qui est également un subject 
    // Observable auquel on a souscrit 
    // On lance le subject ouvert pour les players pas de désabonnement
    this.albumService.subjectAlbum.subscribe(
      album => {
        // console.log(album)
        this.album = album;
        this.showplayer = true; // player 
        this.current = 1;
        let duration = album.duration; // chaque morceau fait 120 secondes
        this.total = Math.floor(duration / 120); // nombre de morceau
        this.ratio = Math.floor(100 / this.total); // ratio pour la barre de progression avec Bootstrap
        let step = this.ratio;

        const timer = 120 * 1000; // toutes les deux minutes on passe au morceau suivant

        // toutes les deux minutes on passe au morceau suivant
        const player = setInterval(() => {
          this.current++;
          this.ratio += step; // on ajoute le ratio
          if (this.ratio > 100) {
            clearInterval(player);
            this.showplayer = false;
            // mise à jour du status dans l'album
            this.albumService.switchOff(album); // mise à jour d'album
          }
        }, timer)
      }
    )
  }

}
