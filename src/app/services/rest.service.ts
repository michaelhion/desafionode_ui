import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientModel } from '../models/clientModel';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = environment.apiUrl;
  constructor(
    private http : HttpClient,
    ) { }

  getAll(): Observable<ClientModel[]>{
    return this.http.get<ClientModel[]>(this.apiUrl);
  }

  add(client : ClientModel):Observable<ClientModel>{
    return this.http.post<ClientModel>(this.apiUrl, client);
  }

  login(username: string, password : string): Observable<ClientModel>{
    
    return this.http.post<ClientModel>(this.apiUrl, {username,password});
  }

  edit(client : ClientModel):Observable<ClientModel>{
    return this.http.put<ClientModel>(this.apiUrl, client);
  }

  delete(id:number) : Observable<ClientModel>{
    return this.http.delete<ClientModel>(this.apiUrl + id);
  }

  
  findById(id:number) : Observable<ClientModel>{
    return this.http.get<ClientModel>(this.apiUrl + id);
  }

  
  findByName(name:string) : Observable<ClientModel>{
    return this.http.delete<ClientModel>(this.apiUrl + name);
  }
}
