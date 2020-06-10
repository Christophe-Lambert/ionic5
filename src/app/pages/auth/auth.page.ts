import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AuthParams } from 'src/app/models/authParams';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  queryParams: AuthParams; 
  mode: string;
  authForm: FormGroup;
  errorMessage: any;

  constructor(private authService: AuthService,
    private navCtrl: NavController, 
    private menuCtrl: MenuController,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    console.log('ngOnInit');
    this.initForm();
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.route.queryParams.subscribe((params:AuthParams) => {
      console.log(params['mode']);
      this.mode = params['mode'];
      if(this.mode === 'disconnect') { this.onDisconnect();}
    });
    
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  initForm() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    if (this.mode === 'new') {
      this.authService.signUpUser(email, password).then(
        () => {
          //this.navCtrl.setRoot(TabsPage);
          this.navCtrl.navigateForward('/tabs');
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    } else if (this.mode === 'connect') {
      this.authService.signInUser(email, password).then(
        () => {
          //this.navCtrl.setRoot(TabsPage);
          this.navCtrl.navigateForward('/tabs');
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }

  onDisconnect() {
    firebase.auth().signOut();
    //this.menuCtrl.close();
    this.initForm();
  }
  

}
