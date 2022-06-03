import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente.models';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url:string =environment.apiUrl+'/cliente'

  constructor(private httpClient:HttpClient) {

   }
   
   addCliente(cliente:Cliente):Observable<Cliente>{
     return this.httpClient.post<Cliente>(`${this.url}/addCliente`,cliente);
   }
   
   login(correo: string, password: string): Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.url}/login?correoElectronico=${correo}&password=${password}`);
  }

}
