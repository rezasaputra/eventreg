import { Component } from '@angular/core';
import {ModalController,NavController, Platform, NavParams, ViewController  } from 'ionic-angular';
import { DetailticketPage } from '../detailticket/detailticket';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-ticket',
  templateUrl: 'tiket.html'
})
export class TiketPage {

  tikets: any;

  constructor(public navCtrl: NavController,public navParams: NavParams,public modalCtrl: ModalController,public restProvider: RestProvider) {
    this.restProvider.getticketByuser(1)
    .then(data => {
      this.tikets = data;
      console.log(1);
      console.log(this.tikets);
    });

  }

  openModal(kode) {
  let modal = this.modalCtrl.create(ModalContentPage, kode);
  modal.present();
  }

}

@Component({
  templateUrl: 'modal-tiket.html'
})
export class ModalContentPage {
  character;
  Code:String;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.Code=params.get('kode');
    console.log(params.get('kode'));

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
