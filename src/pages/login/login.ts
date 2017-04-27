import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angfire: AngularFire) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login() {
    this.angfire.auth.login({
      email: this.email,
      password: this.password
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then((response) => {
      console.log('login success ' + JSON.stringify(response));
      let currentUser = {
        email: response.auth.email,
        photo: response.auth.photoURL
      }
      window.localStorage.setItem('currentuser', JSON.stringify(currentUser)); 
      this.navCtrl.pop();
    }).catch((error) => {
      console.log(error);
    });
  }

  facebooklogin() {
    this.angfire.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then((response) => {
      console.log('Login success with Facebook' + JSON.stringify(response));
      let currentUser = {
        email: response.auth.displayName,
        photo: response.auth.photoURL
      }
      window.localStorage.setItem('currentuser', JSON.stringify(currentUser)); 
      this.navCtrl.pop();
    }).catch((error) => {
      console.log(error);
    });
  }
}
