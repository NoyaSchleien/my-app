import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IPerson } from './person';

@Injectable()
export class WelcomeService {
  private _url = 'http://localhost:58949/api/Test/get';
  // private _url = 'assets/person.json';
  // private _url= 'http://jsonplaceholder.typicode.com/posts';
  private _person:IPerson;

  constructor(private _http: HttpClient) { }

  // getPerson(id: number): Observable<IPerson> {
  //   return this._http.get<IPerson>(this._url)
  //     .do(data => this._person = data)
  //     ._catch(this.handleError);
  // }
  // getPerson(id: number): IPerson {
  //   if (id == 1) {
  //     this._person = {
  //       "id": 1,
  //       "name": "John",
  //       "phone": "111",
  //       "address": "aaaa",
  //       "video": "http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov"
  //     }
  //   }
  //   if (id == 2) {
  //     this._person = {
  //       "id": 2,
  //       "name": "Yael",
  //       "phone": "222",
  //       "address": "bbbb",
  //       "video": "http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov"
  //     }
  //     }
  //     if (id == 3) {
  //       this._person = {
  //         "id": 3,
  //         "name": "Ori",
  //         "phone": "333",
  //         "address": "cccc",
  //         "video": "http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov"
  //       }
  //       }
  //       if (id == 4) {
  //         this._person = {
  //           "id": 4,
  //           "name": "Dani",
  //           "phone": "444",
  //           "address": "dddd",
  //           "video": "http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov"
  //         }
  //       }

  //       return this._person;
  //     }
  //   }
    getPerson(id: number): Observable<IPerson> {
      const url = `${this._url}/${id}`;
      return this._http.get<IPerson>(url)
        .do(data => this._person = data)
        .catch(this.handleError);
    }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
