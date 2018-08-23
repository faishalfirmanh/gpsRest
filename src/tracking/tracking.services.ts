import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Tracking } from '../model/tracking.model';
import { Geolocation } from '@ionic-native/geolocation';
const httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable()

export class TrackingService {
  lat:number;
  long:number;
  tracking  : Tracking = new Tracking;
    apiUrl: string = 'http://localhost:8080';
    constructor(private http:HttpClient, public geolocation: Geolocation){


    }

    // public Geo(){
    //   this.lat;
    //   this.long;
    //
    // }

    private trackingUrl = this.apiUrl+'/item';

    public getTracking() {
        return this.http.get<Tracking[]>(this.trackingUrl);
    }

    public createTracking(data) {
      return this.http.post<Tracking>(this.trackingUrl, data);
    }

}
