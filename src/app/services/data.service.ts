import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {

  constructor(private http: Http) { 
  }

  getTableData() {
    let dataURL = "dummy-data.json";
    return this.http.get(dataURL)
      .map(
        (response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

}
