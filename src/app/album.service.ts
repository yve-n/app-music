import { Injectable } from '@angular/core';
import { Album, List } from './album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';
import { Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  subjectAlbum = new Subject<Album>();
  albums: Album[] = ALBUMS;
  albums_list:List[] = ALBUM_LISTS;
  album:Album;
  
  constructor() { 
    
  }
  getAlbum(id:string){
    return this.albums.find(elem => elem.id === id);
  }
  
  getAlbumList(id:string){
    return this.albums_list.find(list => list.id === id);
  }
  getAlbums(): Album[] {
    return this.albums.sort((a, b) => b.duration - a.duration);
  }
  count(){
    return this.albums.length;
  }
  paginate(start:number,end:number):Album[]{
    return this.albums.sort((a, b) => b.duration - a.duration).slice(start,end);
  }
  search(word:string) :Album[]{
    let re = new RegExp(word.trim(), 'g');
    return this.albums.filter(album => album.title.match(re) && album.title.match(re).length > 0);
    
  }
  switchOn(album: Album) {

    this.albums.forEach(
      a => {
        if (a.ref === album.ref) { album.status = 'on'; }
        else {
          a.status = 'off';
        }
      }
    );
  
    this.subjectAlbum.next(album); // Observer puscher les informations
  }
  
  switchOff(album: Album) {
    this.albums.forEach(
      a => {
        a.status = 'off';
      }
    );
  }
  


}
