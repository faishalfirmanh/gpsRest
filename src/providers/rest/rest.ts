import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
let headerOptions: any = { 'Content-Type': 'application/json' };
let headers = new Headers(headerOptions);

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  // var headers = new Headers();
  // headers.append(headerName, value);

  apiUrl = 'http://localhost:8080';
  data ={"namaTempat":"", "latitude":"","longlitude":""};

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  saveUser(namaTempat, latitude, longitude) {
    console.log("namaTempat = "+namaTempat, "latitude = "+latitude, "longitude ="+longitude);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/item', JSON.stringify(namaTempat, latitude, longitude))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getUsers() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/item').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

// postData(namaTempat, latitude, longitude){
//   console.log("namaTempat = "+namaTempat, "latitude ="+latitude, "longitude ="+longitude);
//   let param = { name: namaTempat, lati: latitude, longi: longitude };
//   let url ="http:localhost:8080/item";
//   let request = this.http.post(url, param);
//   return request.toPromise();
//
// }




//this.http.post(apiUrl +type, JSON.stringify(credentials), {headers: header})

}
