import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {AppSettings} from '../constants';
import {Data} from '../shared/data';
import {WindFarms} from '../shared/winds';
import {WindFarmResult} from '../shared';


@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  // Define API
  apiURL = AppSettings.API_ENDPOINT;

  constructor(private http: HttpClient) { }

  // HttpClient API get() method => Fetch All Farms list
  getWinds(): Observable<WindFarms[]> {
    return this.http.get<any>(this.apiURL + '/winds')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API get() method => Fetch filtered farm list by ID
  filterWindFarms(query): Observable<WindFarms> {
    return this.http.get<any>(this.apiURL + '/winds/' + query)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
