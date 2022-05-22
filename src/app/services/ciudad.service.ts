import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Ciudad } from '../models/ciudad.model';


@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  url: string = environment.apiUrl+'/ciudad';
  constructor(private httpCliente:HttpClient) { }

  listaCiudades(): Observable<Ciudad[]>{
    return this.httpCliente.get<Ciudad[]>(`${this.url}/listaCiudades`);
  }

}
