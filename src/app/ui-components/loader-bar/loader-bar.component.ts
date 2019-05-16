import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderBarService } from './loader-bar.service';
import { LoaderState } from '../../utilitis/interfaces';

@Component({
  selector: 'app-loader-bar',
  templateUrl: './loader-bar.component.html',
  styleUrls: ['./loader-bar.component.scss']
})
export class LoaderBarComponent implements OnInit {

  public show:boolean = false;
  private sub: Subscription;

  constructor(private loaderBar:LoaderBarService) { }

  ngOnInit() {
    this.sub = this.loaderBar.loaderState
    .subscribe((state: LoaderState) => {
        this.show = state.show;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
}

}
