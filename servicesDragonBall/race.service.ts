import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class RaceService {
  private _url: string = "../assets/dataDB/race.json";
  constructor(private http: HttpClient) { }

  getRaces(){
    return this.http.get(this._url)
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "ServerError");
  }
}
