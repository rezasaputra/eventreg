import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import {  GooglePlus }from '@ionic-native/google-plus';
import firebase from 'firebase';
import { AngularFireAuth} from 'angularfire2/auth';
import { RestProvider } from '../../providers/rest/rest';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public storage:Storage,public restProvider:RestProvider,public fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public googleplus:GooglePlus ) {
    storage.ready().then(() => {
      storage.set('name', 'Max');
    });

  }

  googleLogin():void {
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res=>{
      console.log(res);
      console.log(res.user.uid);
      let iduser={"id_user":res.user.uid}
      this.restProvider.generatetoken(iduser).then((result) => {
        console.log(result);
        //console.log(result.token);
        this.storage.ready().then(() => {
          //  this.storage.set('token', result.token);
          console.log('berhasil');
        });
        //this.navCtrl.setRoot(TabsPage,{data:result});
      }, (err) => {
        console.log(err);
        this.navCtrl.push('RegisterPage',{data: res,jenis:'google'});
      });

      //this.navCtrl.push('RegisterPage',{data: res,jenis:'google'});
    })

  }
  googleLogout():void {

  }

  facebooklogin():void {
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res =>{
      console.log(res);
    console.log('from facebook');
    this.navCtrl.push('RegisterPage',{data: res,jenis:'facebook'});
    })
  }
  facebooklogout():void {
    this.fire.auth.signOut();
  }



  socialLogin(val){
    this.navCtrl.push('RegisterPage',{jenis:'instagram'});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
