import { Component,ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import  { NextPage } from '../next/next';
import { Geolocation } from '@ionic-native/geolocation';
import { RestProvider } from '../../providers/rest/rest';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  latitude: number;
  longitude: number;
  users: any;
  data:any;
  user = {namaTempat : ''};

  // openNextPage(){
  //   this.navCtrl.push(NextPage);
  //
  // }


  constructor(public navCtrl: NavController, public geolocation: Geolocation, public restProvider: RestProvider) {


          this.getUsers();
          this.geolocation.getCurrentPosition().then((resp) => {
            let userLocations = {
              latitude: resp.coords.latitude,
              longitude : resp.coords.longitude
            }
          console.log("Locations acquired");
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
      this.restProvider.saveUser(this.user).then((result) => {
        result = this.user;

        console.log('Succes Saved');
      }, (err) => {
        console.log(err);
      });

    }




}
