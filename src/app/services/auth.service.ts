import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
