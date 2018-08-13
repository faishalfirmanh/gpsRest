import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
//  db:SQLiteObject = null;

  constructor(public http: HttpClient) {
    console.log('Hello DatabaseProvider Provider');
  }

}

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
