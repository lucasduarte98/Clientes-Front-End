import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = "http://localhost:8080/api/v1/clientes";
  constructor(private httpClient: HttpClient) { }

  getClientesList(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);

    
  }

  create( clientes: Cliente): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, clientes);
  
  }
  update( clientes: Cliente, id: number): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, clientes);
  
  }

  getById(id: number): Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);

  }

  updateStatus(id: number): Observable<Object>{
    return this.httpClient.patch(`${this.baseURL}/${id}`, id);
  
  }

  }


