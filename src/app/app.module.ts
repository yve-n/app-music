import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { PaginateComponent } from './paginate/paginate.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

// définition de la constante pour les routes
const albumsRoutes: Routes = [
  {
    path: 'albums',
    component: AlbumComponent
    },
    {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
    },
    {
    path: 'login',
    component: LoginComponent
    },
    {
    path: 'album/:id',
    component: AlbumDescriptionComponent
    },
    {
      path:'album/link1',
      component: PaginateComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    AlbumDetailsComponent,
    SearchComponent,
    PaginateComponent,
    AudioPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(albumsRoutes), // chargement des routes dans l'application
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
