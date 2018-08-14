
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { HomePage} from '../home/home';
import { Geolocation } from '@ionic-native/geolocation';
import { Component, ViewChild, ElementRef } from '@angular/core';


/**
 * Generated class for the NextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 declare var google;
@IonicPage()
@Component({
  selector: 'page-next',
  templateUrl: 'next.html',
})
export class NextPage {
  //
  // @ViewChild('map') mapElement: ElementRef;
  // map: any;


  constructor(public navCtrl: NavController, public geolocation: Geolocation) {



  }

//   loadMap(){
//
//     this.geolocation.getCurrentPosition().then((position) => {
//
//       let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//
//       let mapOptions = {
//         center: latLng,
//         zoom: 15,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//       }
//
//       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//
//     }, (err) => {
//       console.log(err);
//     });
//
//   }
//
//   ionViewDidLoad(){
//     this.loadMap();
//   }
//
//   addInfoWindow(marker, content){
//
//   let infoWindow = new google.maps.InfoWindow({
//     content: content
//   });
//
//   google.maps.event.addListener(marker, 'click', () => {
//     infoWindow.open(this.map, marker);
//   });
//
// }




  }
