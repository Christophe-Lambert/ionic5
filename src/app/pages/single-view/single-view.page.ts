import { Component, OnInit } from '@angular/core';
import { NatureView } from 'src/app/models/NatureView.model';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.page.html',
  styleUrls: ['./single-view.page.scss'],
})
export class SingleViewPage implements OnInit {

  natureView: NatureView;

  constructor(private navParams: NavParams,private route: ActivatedRoute,) {}

  ngOnInit() {
    //this.natureView = this.navParams.get('natureView');
    this.route.queryParams.subscribe(params => {
      this.natureView = JSON.parse(params["natureView"]);
      console.log(this.natureView);
    
    });
  }

}
