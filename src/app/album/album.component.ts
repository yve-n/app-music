import { Component, OnInit } from '@angular/core';

import { Album } from '../album';
import { AlbumService } from '../album.service';
import { ALBUMS} from '../mock-albums';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  title: string = "Page principale Albums Music";
  albums: Album[] ;
  idEvent :string;
  wordEvent: string;
  selectedAlbum : Album;
  status: string; // pour gérer l'affichage des caractères [play]

  constructor(private albumService : AlbumService) { }

  ngOnInit(): void {
    // this.albums = this.albumService.getAlbums();
    this.albums =this.albumService.paginate(0,10);
    //console.log(this.albumService.count());
  }

  onSelect(album: Album){
   // console.log(album);
    this.selectedAlbum = album;
  }

  playParent($event){
    this.status = $event.id;
    this.albumService.switchOn($event);
  }

  searchAlbum($event){
    if($event){
      this.albums = $event;
    }
    
  }
    // mise à jour de la pagination
  paginate($event) {
      this.albums = this.albumService.paginate($event.start, $event.end);
  }
  

}
