import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core'; //biasah,e eror
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RestProvider } from "../providers/rest/rest";
import { TrackingService } from '../tracking/tracking.services';
import  { NextPage } from '../pages/next/next';
import { TrackingPage } from '../pages/tracking/tracking';
import { AddTrackingPage } from '../pages/add-tracking/add-tracking';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NextPage,
    TrackingPage,
    AddTrackingPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NextPage,
    TrackingPage,
    AddTrackingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    TrackingService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,

  ],



})
export class AppModule {}
