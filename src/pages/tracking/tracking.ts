import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrackingService } from '../../tracking/tracking.services';
import { Tracking } from '../../model/tracking.model';
import { AddTrackingPage } from '../add-tracking/add-tracking';

/**
 * Generated class for the TrackingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracking',
  templateUrl: 'tracking.html',
})
export class TrackingPage {

  tracking : Tracking[];

  constructor(public navCtrl: NavController, public navParams: NavParams , public trackingService: TrackingService) {
  }

  async ionViewDidLoad() {
    console.log('ionViewDidLoad TrackingPage');
    await this.trackingService.getTracking().subscribe(
          data => {this.tracking = data;
            console.log(data);
          });
  }

  async addTracking(){
    await this.navCtrl.push(AddTrackingPage);
  }

}
