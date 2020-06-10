import { Injectable } from '@angular/core';
import { NatureView } from '../models/NatureView.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NatureViewService {

  private natureViewList: NatureView[] = [];
  natureviewList$ = new Subject<NatureView[]>();

  constructor() { }

  
  emitList() {
    this.natureviewList$.next(this.natureViewList);
  }

  addNatureView(view: NatureView) {
    this.natureViewList.push(view);
    this.emitList();
  }
}
