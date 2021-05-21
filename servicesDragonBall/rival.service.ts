import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RivalService {
  private _url: string = "../assets/dataDB/rival.json"
  constructor(private http: HttpClient) { }

  getRivals() {
    return this.http.get(this._url)
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse)
  {
    return throwError (error.message || "Server Error");
  }
}
