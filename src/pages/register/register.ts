import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';
import { Storage }from '@ionic/storage';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  @ViewChild('name') v_nama;
  @ViewChild('email')v_email;
  @ViewChild('gender') v_gender;
  @ViewChild('date')v_date;
  @ViewChild('id_usr')v_uid;

  Data:any;
  Date:any;
  Name:String;
  Email:String;
  Gender:String="Male";
  id_user:String;
  img:String;
  isi:String;
  myDate: String = new Date().toISOString();
  FormRegister:FormGroup;

  constructor(public storage:Storage,public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder,public restProvider: RestProvider) {

    if(navParams.get('jenis')!='instagram'){
      this.Data=navParams.get('data');
      this.Name=this.Data.user.displayName;
      this.Email=this.Data.user.email;
      this.id_user=this.Data.user.uid;
      this.img=this.Data.user.photoURL;
    }else{
      this.Data={user:{'displayName':'okok','uid':'asdsa','email':'rejjj'}};
      this.Name="this.Data.user.displayName";
      this.Email="this.Data.user.email";
      this.id_user="this.Data.user.uid";
      this.img="this.Data.user.photoURL";
    }
      storage.ready().then(()=>{
        storage.get('token').then((val)=>{
          console.log(val);
        })
      });

  }

  clickgender(val){
    this.Gender=val;
  }

  register(){
    this.Date = this.v_date.value;
    let Tanggal= this.Date.year+'-'+this.Date.month+'-'+this.Date.day;
    let newDate = new Date(Tanggal).toISOString();
     let  reg ={"nama":this.v_nama.value,"email":this.v_email.value,"gender": this.Gender,"tanggal_lahir":newDate,"id_user":this.id_user,"image":this.img,"created_at":this.myDate};
     console.log(reg);
     this.restProvider.adduser(reg).then((result) => {
       console.log(result);
     }, (err) => {
       console.log(err);
     });
     let iduser={"id_user":this.v_uid}
     this.restProvider.generatetoken(iduser).then((result) => {
       console.log(result);
     }, (err) => {
       console.log(err);
     });
    //this.navCtrl.setRoot(TabsPage,{user:reg});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
