import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  private url = 'https://identitytoolkit.googleapis.com/v1/';
  private apikey = 'AIzaSyCXV7mSSK52ZdPt2SWYlIptMgHosnh7a40';
  userToken!: string;

  //crear nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  //login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  constructor(private http:HttpClient) { 

  }


  logout(){

  }
  login(usuario:UsuarioModel){
    const authData = {
      email:usuario.email,
      password: usuario.password,
      returnSecureToken: true
  
      };
      return this.http.post(
        `${this.url}accounts:signInWithPassword?key=${this.apikey}`,
        authData
      ).pipe(
        map(resp=>{
  
          console.log("entro en el map del rxjs");
          //this.guardarToken(resp['idToken']);
          return resp;
  
        })
      );

  }



  registrarNuevoUsuario(usuario:UsuarioModel){
  
    const authData = {
    email:usuario.email,
    //nombre:usuario.nombre,
    //apellido:usuario.apellido,
    //ciudad:usuario.ciudad,
    password: usuario.password,
    returnSecureToken: true

    };
    return this.http.post(
      `${this.url}accounts:signUp?key=${this.apikey}`,
      authData
    ).pipe(
      map(resp=>{

        console.log("entro en el map del rxjs");
      //  this.guardarToken();
        return resp;

      })
    );
    
  }





  
  private guardarToken(idToken:string){
  this.userToken=idToken;
  localStorage.setItem('token', idToken);
  }



  leerToken(){
    if(localStorage.getItem('token')){
      this.userToken!=localStorage.getItem('token');
    }else{
      this.userToken='';
    }
    return this.userToken;
  }

}
