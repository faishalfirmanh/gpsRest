import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { TrackingService } from '../../tracking/tracking.services';
import { Tracking } from '../../model/tracking.model';

/**
 * Generated class for the AddTrackingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-tracking',
  templateUrl: 'add-tracking.html',
})
export class AddTrackingPage {
  latitude: number = null;
  longitude: number = null;
  tracking : Tracking = new Tracking();

  constructor(public navCtrl: NavController, public navParams: NavParams,  public geolocation: Geolocation ,public trackingService: TrackingService) {

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

  saveTracking(): void {
  this.trackingService.createTracking(this.tracking)
      .subscribe( data => {
        console.log("User created successfully.");
      });
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTrackingPage')
  }

}
