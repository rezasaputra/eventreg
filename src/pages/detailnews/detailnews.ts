import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the DetailnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailnews',
  templateUrl: 'detailnews.html',
})
export class DetailnewsPage {
  events:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {
    this.restProvider.getEventById(navParams.get('id'))
    .then(data => {
      this.events = data;
      console.log(navParams.get('id'));
      console.log(this.events);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailnewsPage');
  }

}
