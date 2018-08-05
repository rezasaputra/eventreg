import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailnewsPage } from '../detailnews/detailnews';
import { DetailinfoPage } from '../detailinfo/detailinfo';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mainmenu:String;
  events: any;
  news: any;
  login:String;
  data:any;

  constructor(public navCtrl: NavController,public restProvider: RestProvider) {
    this.mainmenu = "News";
    // this.restProvider.private().subscribe(data=>{
    //   this.data = data.message;
    //   console.log(data.message);
    // });
    this.getEvent();
    this.getNews();
  }
  getEvent() {
    this.restProvider.getEvent()
    .then(data => {
      this.events = data;
      console.log(data);
    });
  }
  getNews() {
    this.restProvider.getNews()
    .then(data => {
      this.news = data;
      console.log('newsss',this.news);
    });
  }

  detailnews(id){
    this.navCtrl.push("DetailnewsPage",{id:id});
  }
  detailinfo(id){
    this.navCtrl.push("DetailinfoPage",{id:id});
  }

}
