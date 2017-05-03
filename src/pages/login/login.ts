import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public angfire: AngularFire) {
  }

  public googleLogin(): void {
    this.angfire.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then((response) => {
      console.log('login success ' + JSON.stringify(response));
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

  public facebookLogin(): void {
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
