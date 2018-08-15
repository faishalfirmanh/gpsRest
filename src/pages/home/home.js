var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { RestProvider } from '../../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http'; //TAMBAH BARU
// import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
var HomePage = /** @class */ (function () {
    // openNextPage(){
    //   this.navCtrl.push(NextPage);
    //
    // }
    function HomePage(navCtrl, geolocation, restProvider, httpClient) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.restProvider = restProvider;
        this.httpClient = httpClient;
        this.user = { namaTempat: '' };
        this.getUsers();
        this.geolocation.getCurrentPosition().then(function (resp) {
            var userLocations = {
                latitude: resp.coords.latitude,
                longitude: resp.coords.longitude
            };
            console.log("Locations acquired");
            console.log(userLocations);
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    HomePage.prototype.getUsers = function () {
        var _this = this;
        this.restProvider.getUsers()
            .then(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    };
    // saveUser() {
    //   this.restProvider.saveUser(this.user).then((result) => {
    // 
    //     result = this.user;
    //     console.log('Succes Saved');
    //   }, (err) => {
    //     console.log(err)
    //   });
    // 
    // }
    HomePage.prototype.signup = function () {
        var _this = this;
        this.restProvider.saveUser(this.users, 'Enrollment').then(function (result) {
            _this.restProvider = result;
            if (_this.restProvider.user) {
                console.log(_this.restProvider);
            }
            else {
                console.log("User already exists");
            }
        }, function (err) {
        });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, Geolocation, RestProvider, HttpClientModule])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map