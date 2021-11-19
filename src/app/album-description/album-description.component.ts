import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.scss']
})
export class AlbumDescriptionComponent implements OnInit {
  album : Album;
  // récupérez le service route
  // récupérez le service
  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit(): void {
    // permet de récupérer l'identifiant
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);
    //recupère l'album lié à l'identifiant
    this.album = this.albumService.getAlbum(id);
      
    
     
  }

}


