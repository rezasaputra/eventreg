import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailticketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailticket',
  templateUrl: 'detailticket.html',
})
export class DetailticketPage {

  Code="okokoko";

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailticketPage');
  }

}
