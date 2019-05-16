import { Component, OnInit, Input } from '@angular/core';
import { HttpHandlerService } from '../../general-services/http-handler.service';
import { SongListService } from '../songs-list/song-list.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExtendSongComponent } from '../dialogs/extend-song/extend-song.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent implements OnInit {


  @Input('inputsong') public song: any;
  @Input('index') public index: number;
  public isFavorite: boolean = false;

  constructor(private httpHandler: HttpHandlerService,
    private songListService: SongListService,
    public dialog: MatDialog,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.isFavorite = this.songListService.isFavorite(this.song["key"]);
  }

  private addToFavorites(song: any): void {
    this.httpHandler.addToFavrites(song).subscribe(res => {
      this.isFavorite = true;
    }, err => {
      console.log(err);
      alert("Error in add favorite");
    });;
  }

  private removeFromFavorites(song: any): void {
    this.httpHandler.removeFavorite(song).subscribe((res) => {
      this.isFavorite = false;
    }, err => {
      console.log(err);
      alert("Error in removing favorite");
    });;
  }

  public openSongExtension(): void {
    this.httpHandler.getSongDetails(this.song.key, this.song.alias).subscribe((songs)=>{
        songs["youtubeLink"]=this.sanitizer.bypassSecurityTrustResourceUrl(songs["youtubeLink"]);
        this.openDialog(songs);
    },err=>{
      console.log(err);
      alert("Error in removing favorite");
    })
  }

  public openDialog(withData:any): void {
    const dialogRef = this.dialog.open(ExtendSongComponent, {
      width: '800px',
      height: '500px;',
      data: {
        songDetails: withData 
      }
    });
  }

}
