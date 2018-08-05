import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the DetailinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailinfo',
  templateUrl: 'detailinfo.html',
})
export class DetailinfoPage {

  events:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {
    this.restProvider.getEventById(navParams.get('id'))
    .then(data => {
      this.events = data;
      console.log(navParams.get('id'));
      console.log(data);
    });

  }

  saveUser() {
  let  tiket ={"id_event":1,"id_user":1,"qrcode":"okok",created_at:""};
  this.restProvider.addtiket(tiket).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailinfoPage');
  }

}
