import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideoContentComponent } from './myComedyFolder/video-content/video-content.component';
import { FindMeComponent } from './public/find-me/find-me.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpcomingShowsComponent } from './myComedyFolder/upcoming-shows/upcoming-shows.component';
import { RouterModule, Routes } from '@angular/router';
import { ComedyComponent } from './myComedyFolder/comedy/comedy.component';
import { MusicComponent } from './myMusicFolder/music/music.component';
import { MusicInfoComponent } from './myMusicFolder/music-info/music-info.component';
import { MusicContentComponent } from './myMusicFolder/music-content/music-content.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/comedy', pathMatch: 'full' },
  { path: 'comedy', component: ComedyComponent },
  { path: 'music', component: MusicComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    VideoContentComponent,
    FindMeComponent,
    UpcomingShowsComponent,
    ComedyComponent,
    MusicComponent,
    MusicInfoComponent,
    MusicContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
