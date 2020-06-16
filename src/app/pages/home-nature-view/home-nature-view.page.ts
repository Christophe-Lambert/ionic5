import { Component, OnInit } from '@angular/core';
import { NatureView } from 'src/app/models/NatureView.model';
import { Subscription } from 'rxjs';
import { NatureViewService } from 'src/app/services/nature-view.service';
import { NewViewPage } from '../new-view/new-view.page';
import { NavController } from '@ionic/angular';
import { SingleViewPage } from '../single-view/single-view.page';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home-nature-view',
  templateUrl: './home-nature-view.page.html',
  styleUrls: ['./home-nature-view.page.scss'],
})
export class HomeNatureViewPage implements OnInit {

  natureViewList: NatureView[];
  natureViewListSubscription: Subscription;
  newViewPage = NewViewPage;

  constructor(private natureViewService: NatureViewService, private navCtrl: NavController) {

  }

  ngOnInit() {
    this.natureViewListSubscription = this.natureViewService.natureviewList$.subscribe(
      (natureViews: NatureView[]) => {
        this.natureViewList = natureViews;
      }
    );
    this.natureViewService.fetchList();
  }

  ngOnDestroy() {
    this.natureViewListSubscription.unsubscribe();
  }

  onNewViewPage() {
    this.navCtrl.navigateForward('/new-view');
  }

  onLoadNatureView(view: NatureView) {
    //this.navCtrl.push(SingleViewPage, {natureView: view});


    let navigationExtras: NavigationExtras = {
      queryParams: {
        natureView: JSON.stringify(view)
      }
  };
  this.navCtrl.navigateForward(['/single-view'], navigationExtras);

  }


}
