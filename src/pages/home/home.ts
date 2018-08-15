import { Component,ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import  { NextPage } from '../next/next';
import { Geolocation } from '@ionic-native/geolocation';
import { RestProvider } from '../../providers/rest/rest';
import {NgModule} from '@angular/core'; //TAMBAH BARU
import {HttpClientModule, HttpClient} from '@angular/common/http'; //TAMBAH BARU
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Observable } from '../../../node_modules/rxjs/Observable';
// import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userData:  {"namaTempat":"", "latitude":"","longlitude":""};

  responseData: any;

  // data: Observable<any>;

  latitude: number;
  longitude: number;
  users: any;

  user : any;

  openNextPage(){
    this.navCtrl.push(NextPage);

  }


  constructor(public navCtrl: NavController, public geolocation: Geolocation, public restProvider: RestProvider, private httpClient: HttpClientModule, public http: HttpClient) {


          this.getUsers();
          this.geolocation.getCurrentPosition().then((resp) => {
            let userLocations = {
              latitude: resp.coords.latitude,
              longitude : resp.coords.longitude
            }
          //console.log("Locations acquired");
          console.log(userLocations);
          this.latitude = resp.coords.latitude
          this.longitude = resp.coords.longitude
          }).catch((error) => {
            console.log('Error getting location', error);
          });

        }
          getUsers(){
            this.restProvider.getUsers()
              .then(data => {
              this.users = data;
              console.log(this.users);
          });

    }



    saveUser() {
      console.log(this.namaTempat,this.latitude, this.longitude);
      this.restProvider.saveUser(this.namaTempat, this.latitude, this.longitude).then((result) => {
      //this.restProvider = result;
        result = this.namaTempat, this.latitude, this.longlitude;
        localStorage.setItem('/item', JSON.stringify(this.responseData));


        console.log('Succes Saved');

      }, (err) => {
        console.log(err)
      });

    }

    // postPlace(){
    //   apiUrl='http://localhost:8080/item'
    //   this.http.post(this.apiUrl+'/item', JSON.stringify(data))
    //   let postData = new FormData();
    //   postData.append('namaTempat','latitude','longlitude');
    //   postData.append('dddd','11121','232323');
    //   this.data.subscribe(data =>{
    //     console.log(data);
    //   });
    // }

  //   simpan(){
  //
  //  this.restProvider.postData(this.userData,"simpan").then((result) => {
  //   this.responseData = result;
  //   console.log(this.responseData);
  //   localStorage.setItem('userData', JSON.stringify(this.responseData))
  //   console.log("sukses");},
  //   (err)=> {
  //     console.log("gagal")
  //   });
  // }






}
