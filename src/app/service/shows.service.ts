import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  // baseURL for the api calls
  baseURL = 'http://api.tvmaze.com';

  dramaShows = {};
  actionShows = {};
  romanceShows = {};
  sciFiShows = {};
  horrorShows = {};

  constructor(private http: HttpClient) { }

  // Fetches all available shows data.
  getAllShows(): Observable<[]>{
    return this.http.get(`${this.baseURL}/shows`)
    .pipe(map((data: any) => data),
    catchError((err: HttpErrorResponse) => {
      return throwError(err);
    }));
  }

  // Fetches show data by id.
  getShowById(id: number): Observable<{}>{
    return this.http.get(`${this.baseURL}/shows/${id}`)
    .pipe(catchError((err: HttpErrorResponse) => {
      return throwError(err);
    }));
  }

  // Fetches season list for given show.
  getShowSeasonList(id: number): Observable<[]>{
    return this.http.get(`${this.baseURL}/shows/${id}/seasons`)
    .pipe(map((data: any) => data),
    catchError((err: HttpErrorResponse) => {
      return throwError(err);
    }));
  }

  // Searches data based on search string.
  search(term: string): Observable<[]> {
    if (!term){
      return of(null);
    }
    return this.http.get(`${this.baseURL}/search/shows?q=${term}`)
    .pipe(map((data: any) => data),
    catchError((err: HttpErrorResponse) => {
      return throwError(err);
    }));
  }
}
