import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ciudad } from '../models/ciudad.models';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  url: string= environment.apiUrl+"/ciudad"
  constructor(private httpClient:HttpClient) { }

  listaCiudades(): Observable<Ciudad[]>{
    return this.httpClient.get<Ciudad[]>(`${this.url}/listaCiudades`)
  }

}
