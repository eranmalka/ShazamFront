import { Injectable, KeyValueDiffers } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongListService {

  public favoritesList: Array<string>;

  constructor() { }


  public isFavorite(keyId:number):boolean{
      for(let i=0; i < this.favoritesList.length; i++){
        if(keyId == this.favoritesList[i]["songKey"]){
          return true;
        }
      }
      return false; 
  }
}
