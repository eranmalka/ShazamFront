import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from '../../utilitis/interfaces';


@Injectable({
  providedIn: 'root'
})
export class LoaderBarService {

  private loaderSubject = new Subject<{}>();
  loaderState = this.loaderSubject.asObservable();


  constructor() { }

  show() {
    this.loaderSubject.next(<LoaderState>{ show: true });
  }
  hide() {
    this.loaderSubject.next(<LoaderState>{ show: false });
  }


}
