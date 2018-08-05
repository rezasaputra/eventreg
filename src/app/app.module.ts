import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoPage } from '../pages/info/info';
import { TiketPage } from '../pages/tiket/tiket';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalContentPage } from '../pages/tiket/tiket';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { RestProvider } from '../providers/rest/rest';
import { Base64 } from '@ionic-native/base64';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { IonicStorageModule } from '@ionic/storage';


var config = {
    apiKey: "AIzaSyA0TFt-tpAlEH4Ef3hUD3sE-Gp_T1Vn8fs",
    authDomain: "eventregistration-c5d2e.firebaseapp.com",
    databaseURL: "https://eventregistration-c5d2e.firebaseio.com",
    projectId: "eventregistration-c5d2e",
    storageBucket: "eventregistration-c5d2e.appspot.com",
    messagingSenderId: "51146723886"
  };

@NgModule({
  declarations: [
    MyApp,
    InfoPage,
    TiketPage,
    HomePage,
    TabsPage,
    LoginPage,
    ModalContentPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfoPage,
    TiketPage,
    HomePage,
    TabsPage,
    LoginPage,
    ModalContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    RestProvider,
    GooglePlus,
    AngularFireAuthModule
  ]
})
export class AppModule {}
