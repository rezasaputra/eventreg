import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://localhost/rest_event/index.php';
  token:string;
  constructor(public http: HttpClient,public storage:Storage) {
    console.log('Hello RestProvider Provider');
    setTimeout(()=>{
      storage.ready().then(()=>{
        storage.get('token').then((val)=>{
          this.token=val;
          console.log('loggggg',this.token);
        })
      });
    },1000);


  }

//Authorization
createAuthHeader(headers:Headers){
  headers.append('Authorization',this.token);
}
private(){
  let headers =new Headers();
  this.createAuthHeader(headers);
  //return this.http.get(this.apiUrl+'/rest/generate',{headers:headers})
}

islogged(){
  // if(this.token!=0){return true;}
  // else{return false;}
  // this.storage.ready().then(()=>{
  //   this.storage.get('token').then((val)=>{
  //     return val;
  //     //console.log(val);
  //   })
  // });
}

generatetoken(data){
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
return new Promise((resolve, reject) => {
  this.http.post(this.apiUrl+'/rest/generate',JSON.stringify(data),{headers:headers})
    .subscribe(res => {
      resolve(res);
    }, (err) => {
      reject(err);
    });
});
}

private extractData(res:Response){
  //let body = res.json();
  //if(body.success==true){
  //  window.localStorage.setItem('token',body.token);
  //}
  //return body || {};
}

//endauth

  getUsers() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/user').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

//event
getEvent() {
//let headers =new Headers();
//headers.append('Authorization',this.token);
//this.createAuthHeader(headers);
return new Promise(resolve => {
  this.http.get(this.apiUrl+'/event').subscribe(data => {
    resolve(data);
  }, err => {
    console.log(err);
  });
});
}

getEventById(id) {
return new Promise(resolve => {
  this.http.get(this.apiUrl+'/event?id='+id).subscribe(data => {
    resolve(data);
  }, err => {
    console.log(err);
  });
});
}

//News
getNews() {
let headers =new Headers();
//headers.append('Authorization',"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYiLCJ1c2VybmFtZSI6Ik81dTd3cHR4WkFQUlRmcGRXZlJ6WXh4V2M4ZzIiLCJpYXQiOjE1MzA0NDIwOTAsImV4cCI6MTUzMDQ0NTY5MH0.PTjIPeCG7ZD9FCFdtnVn21-yqmMwG5Bsr1Gro6D_HB4");
//this.createAuthHeader(headers);
return new Promise(resolve => {
  this.http.get(this.apiUrl+'/news',{headers:headers}).subscribe(data => {
    resolve(data);
  }, err => {
    console.log(err);
  });
});
}

getNewsById(id) {
return new Promise(resolve => {
  this.http.get(this.apiUrl+'/news?id='+id).subscribe(data => {
    resolve(data);
  }, err => {
    console.log(err);
  });
});
}

//ticket
getTicket() {
return new Promise(resolve => {
  this.http.get(this.apiUrl+'/tiket').subscribe(data => {
    resolve(data);
  }, err => {
    console.log(err);
  });
});
}

getticketById(id) {
return new Promise(resolve => {
  this.http.get(this.apiUrl+'/tiket?id='+id).subscribe(data => {
    resolve(data);
  }, err => {
    console.log(err);
  });
});
}

getticketByuser(user) {
return new Promise(resolve => {
  this.http.get(this.apiUrl+'/tiket?user='+user).subscribe(data => {
    resolve(data);
  }, err => {
    console.log(err);
  });
});
}

//ADD
addtiket(data) {
//let headers = new HttpHeaders();
//headers = headers.set('Content-Type', 'application/json; charset=utf-8');
//headers = headers.set('Access-Control-Allow-Origin', '*');
//headers = headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
//headers = headers.set('Accept', 'application/json');
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/tiket', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

adduser(data){
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
return new Promise((resolve, reject) => {
  this.http.post(this.apiUrl+'/user', JSON.stringify(data),{headers:headers})
    .subscribe(res => {
      resolve(res);
    }, (err) => {
      reject(err);
    });
});
}

}
