import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientModel } from '../models/clientModel';
import { JwtModel } from '../models/jwt.mode';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = environment.apiUrl;
  baseUrl = environment.baseUrl;

  token = localStorage.getItem('token')
  headers = new HttpHeaders().set("Authorization", "bearer " + this.token);

  constructor(
    private http : HttpClient,
    ) { }

  getAll(): Observable<ClientModel[]>{
    let token = localStorage.getItem('token')
    let headers = new HttpHeaders().set("Authorization", `bearer ${token}`);

    return this.http.get<ClientModel[]>(this.apiUrl,{headers:headers});
  }

  add(client : ClientModel):Observable<ClientModel>{
    return this.http.post<ClientModel>(this.apiUrl, client,{headers:this.headers});
  }

  login(username: string, password : string): Observable<JwtModel>{
    
    return this.http.post<JwtModel>(this.baseUrl + 'auth/login', {username,password});
  }

  edit(client : ClientModel):Observable<ClientModel>{
    return this.http.put<ClientModel>(this.apiUrl + '/' +client.id, client,{headers:this.headers});
  }

  delete(id:number) : Observable<ClientModel>{
    return this.http.delete<ClientModel>(this.apiUrl + '/' +id,{headers:this.headers});
  }

  
  findById(id:number) : Observable<ClientModel>{
    return this.http.get<ClientModel>(this.apiUrl + id,{headers:this.headers});
  }

  
  findByName(name:string) : Observable<ClientModel>{
    return this.http.delete<ClientModel>(this.apiUrl + name,{headers:this.headers});
  }

  
}
