var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IonicPage, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Component } from '@angular/core';
var NextPage = /** @class */ (function () {
    //
    // @ViewChild('map') mapElement: ElementRef;
    // map: any;
    function NextPage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
    }
    NextPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-next',
            templateUrl: 'next.html',
        }),
        __metadata("design:paramtypes", [NavController, Geolocation])
    ], NextPage);
    return NextPage;
}());
export { NextPage };
//# sourceMappingURL=next.js.map