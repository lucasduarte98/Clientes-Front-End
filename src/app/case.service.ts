import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Case } from './case';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  private baseURL = "http://localhost:8080/api/v1/clientes";
  constructor(private httpClient: HttpClient) { }

  getCasesList(): Observable<Case[]>{
    return this.httpClient.get<Case[]>(`${this.baseURL}`);

    
  }

  createCase( cases: Case): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, cases);
  
  }
  updateCase( cases: Case, id: number): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, cases);
  
  }

  getById(id: number): Observable<Case>{
    return this.httpClient.get<Case>(`${this.baseURL}/${id}`);

  }

  updateStatus(id: number): Observable<Object>{
    return this.httpClient.patch(`${this.baseURL}/${id}`, id);
  
  }

  }


