import { Component, OnInit, } from '@angular/core';
import { HttpHandlerService } from './general-services/http-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shazmTest';
  isOverlay = true;

  constructor(private httpHandler:HttpHandlerService){}



  ngOnInit(){
  
  }
}
