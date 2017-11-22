import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class StreamService {
  
  private _stream:string;
  private _url = 'http://localhost:58949/api/Test/get';
  
  constructor(private _http: HttpClient) { }

  getStream() : Observable<string>{
    return this._http.get<string>(this._url)
    .do(data=> this._stream = data)
    .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
