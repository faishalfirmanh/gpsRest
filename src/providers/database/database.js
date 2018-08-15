var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    //  db:SQLiteObject = null;
    function DatabaseProvider(http) {
        this.http = http;
        console.log('Hello DatabaseProvider Provider');
    }
    DatabaseProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], DatabaseProvider);
    return DatabaseProvider;
}());
export { DatabaseProvider };
// getOrGenerateDB() {
//               return new Promise((resolve, reject) => {
//             if (this.db != null) {
//                 resolve(this.db)
//             } else {
//                 this.sqlite.create({
//                     name        : 'myDatabase.db',
//                     location    : 'default'
//                 }).then((db: SQLiteObject) => {
//                     this.db = db;
//                     resolve(this.db)
//                 }).catch((e) => {
//                     console.log(e);
//                     reject(e);
//                 });
//             }
//         });
//     }
//# sourceMappingURL=database.js.map