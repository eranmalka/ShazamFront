import { Component, OnInit ,Inject} from '@angular/core';
import { HttpHandlerService } from '../../../general-services/http-handler.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-extend-song',
  templateUrl: './extend-song.component.html',
  styleUrls: ['./extend-song.component.scss']
})
export class ExtendSongComponent implements OnInit {

  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private httpHandler: HttpHandlerService) { }

  ngOnInit() {
   
   
  }

}
