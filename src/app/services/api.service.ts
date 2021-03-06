import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  baseUri:string = 'https://person-crud-newtech-api.herokuapp.com';
  headers = new HttpHeaders().set('Content-Type', 'application/json',)
                             .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  // Create
  createPerson(data): Observable<any> {
    let url = `${this.baseUri}/person`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get persons
  getPersons() {
    return this.http.get(`${this.baseUri}/person`);
  }

  // Get person
  getPerson(id): Observable<any> {
    let url = `${this.baseUri}/person/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update person
  updatePerson(id, data): Observable<any> {
    let url = `${this.baseUri}/person/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete person
  deletePerson(id): Observable<any> {
    let url = `${this.baseUri}/person/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}