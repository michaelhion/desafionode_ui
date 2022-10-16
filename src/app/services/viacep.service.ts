import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CepModel } from '../models/cepModel';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {
  
  constructor(private http : HttpClient) { }

  findAddress(cep: string): Observable<CepModel>{
    return this.http.get<CepModel>(`https://viacep.com.br/ws/${cep}/json/`)
  }

}
