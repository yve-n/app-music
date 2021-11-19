import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms'; // template-driven
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  albums: any;
   @Output() albumSearch: EventEmitter<Album[]> = new EventEmitter();

  constructor(private albumServiceSearch : AlbumService) { }

  ngOnInit(): void {
    // console.log(this.albumServiceSearch.search('toto'));
  }
  onSubmit(form: NgForm): void {
    // récupération des données du formulaire
    console.log(form);
    // récupération d'une valeur spécifique
    console.log(form.value['word']);
    //recherche d'un album à partir d'un mot
    console.log(this.albumServiceSearch.search(form.value.word));

     const results = this.albumServiceSearch.search(form.value.word);
      if(results.length > 0){
        this.albumSearch.emit(results);
      }
    }
    

}
