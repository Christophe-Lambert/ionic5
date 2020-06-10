import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Appareil } from 'src/app/models/appareil';
import { AppareilsService } from 'src/app/services/appareils.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {

  index: number;
  appareil: Appareil;

  constructor(public navParams: NavParams, private route: ActivatedRoute,private modalCtrl:ModalController,
     public appareilsService: AppareilsService) {
  }

  ngOnInit() {
    //this.name = this.navParams.get('appareilName');
    //this.route.queryParams.subscribe(params => {
    //  this.appareil = JSON.parse(params["appareil"]);
      console.log(this.index);
      this.appareil = this.appareilsService.appareilsList[this.index];
    //});
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  onToggleAppareil() {
    this.appareil.isOn = !this.appareil.isOn;

    this.appareilsService.switchChacon('3', this.appareil.isOn)
        .subscribe(res => console.log(res));
  }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
    this.dismissModal();
  }

  onDeleteHours() {
      this.appareil.startTime = '';
      this.appareil.endTime = '';
      this.dismissModal();
  }

}
