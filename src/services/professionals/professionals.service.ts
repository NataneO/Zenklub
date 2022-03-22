import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Professional } from '../../models/professional';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalsService {

  url = 'https://bba1dc38-d131-402a-b617-8584cd4e4f30.mock.pstmn.io/professional';


  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getProfessionals(): Observable<Professional[]> {
    return this.httpClient.get<Professional[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }




  saveProfessional(professional: Professional): Observable<Professional> {
    return this.httpClient.post<Professional>(this.url, JSON.stringify(professional), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateProfessional(professional: Professional): Observable<Professional> {
    return this.httpClient.put<Professional>(this.url + '/' + professional.id, JSON.stringify(professional), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  deleteProfessional(professional: Professional) {
    return this.httpClient.delete<Professional>(this.url + '/' + professional.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}, ` + `message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
