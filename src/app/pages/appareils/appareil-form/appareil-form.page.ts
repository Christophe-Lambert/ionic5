import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Appareil } from 'src/app/models/appareil';
import { AppareilsService } from 'src/app/services/appareils.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-appareil-form',
  templateUrl: './appareil-form.page.html',
  styleUrls: ['./appareil-form.page.scss'],
})
export class AppareilFormPage implements OnInit {

  appareilForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private appareilsService: AppareilsService,public navCtrl: NavController) {
    console.log('constructeur');
    this.initForm();

  }

  ngOnInit() {
    //this.initForm();
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.initForm();
  }
  initForm() {
    console.log('initForm' + this.formBuilder);
    this.appareilForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: this.formBuilder.array([])
    });
  }

  getDescriptionArray() {
      return this.appareilForm.get('description') as FormArray;
  }

  onAddDescription() {
    let newControl = this.formBuilder.control('');
    this.getDescriptionArray().controls.push(newControl);
  }

  onRemoveDescription(index: number) {
    this.getDescriptionArray().removeAt(index);
  }

  onSubmitForm() {
    let newAppareil = new Appareil(this.appareilForm.get('name').value);
    for (let control of this.getDescriptionArray().controls) {
      newAppareil.description.push(control.value);
    }
    this.appareilsService.addAppareil(newAppareil);
    this.navCtrl.pop();
  }

}
