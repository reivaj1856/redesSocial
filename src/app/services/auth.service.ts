import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from '@angular/fire/auth';
import { User } from '../interface/user';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _auth = inject(Auth) 

  singUP(user:User)  {
    return createUserWithEmailAndPassword(this._auth, user.email, user.password);
  }

  singIn(user:User){
    return signInWithEmailAndPassword(this._auth, user.email, user.password);
  }

  constructor() { } 

  private autenticado = false;

  login(){
    this.autenticado = true;
  }

  logout(){
    this.autenticado = false;
  }

  logueado():boolean {
    return this.autenticado;
  }
}

