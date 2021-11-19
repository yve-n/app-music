import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album, List } from '../album';
import { AlbumService } from '../album.service';
import {  ALBUM_LISTS } from '../mock-albums';
@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  @Input() album: Album;
  albums_list:List[];
  songs : Array<string>;
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();

  constructor( private albumServiceList: AlbumService) { }
  play(album:Album){
    this.onPlay.emit(album);
  }

  ngOnChanges(): void { 
    if(this.album) {
      this.songs = this.albumServiceList.getAlbumList(this.album.id).list;
    }
    
    
  }
  ngOnInit(): void {
     console.log(this.album);
  }

}
