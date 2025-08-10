import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { PaymentDetailResponse } from '../models/payment-detail-response';

@Injectable({
  providedIn: 'root'
})
export class LoanCalculatorService {
  private apiUrl = 'http://localhost:8080/api/loan-calculate';

  constructor(private http: HttpClient) { }

  calculate(request: any): Observable<PaymentDetailResponse[]> {
    return this.http.post<PaymentDetailResponse[]>(this.apiUrl, request).pipe(
      catchError(error => {
        const message = error.error?.message || 'Validation Error';
        return throwError( () => message);
      })
    );
  }
}
