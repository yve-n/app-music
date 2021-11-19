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
  albumSubscription : Subscription;
  album:Album
  ratio:number;

  constructor(private albumService : AlbumService) { }

  ngOnInit(): void {
    this.albumSubscription = this.albumService.subjectAlbum.subscribe(
      (album:Album)=>{
        this.album = album;
      }
    )
      this.albumService.emitAlbumSubject();
    
  }

}
