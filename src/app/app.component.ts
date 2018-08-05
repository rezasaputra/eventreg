import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { RestProvider } from '../providers/rest/rest';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(public storage:Storage,public restProvider: RestProvider,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    // storage.ready().then(()=>{
    //   storage.get('token').then((val)=>{
    //     console.log('loggggg',val);
    //   })
    // });
    setTimeout(()=>{
    console.log('rest : ',restProvider.islogged());
    //if(restProvider.islogged()==true){
      this.rootPage=TabsPage;
    //}else{
      //this.rootPage=LoginPage;
    //}
  },2000)
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
