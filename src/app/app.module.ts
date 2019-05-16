import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SongsListComponent } from './ui-components/songs-list/songs-list.component';
import { LoaderBarComponent } from './ui-components/loader-bar/loader-bar.component';
import { SongCardComponent } from './ui-components/song-card/song-card.component';
import { ExtendSongComponent } from './ui-components/dialogs/extend-song/extend-song.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    LoaderBarComponent,
    SongCardComponent,
    ExtendSongComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [
    ExtendSongComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
