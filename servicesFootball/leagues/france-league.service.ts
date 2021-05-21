import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FranceLeagueService {
  private _url: string = "../../assets/dataFootball/franceL.json";
  constructor(private http: HttpClient) { }

  getFranceLeague(){
    return this.http.get(this._url)
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }
}
