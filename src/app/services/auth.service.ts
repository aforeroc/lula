import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';

import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("Error en login ", error);
      return null;
    }
  }

  async loginWithGoogle(email: string, password: string) {
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log("Error en login con Google ", error);
      return null;
    }
  }

  async registrer(email: string, password: string) {
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("Error en registro ", error);
      return null;
    }
  }
}
