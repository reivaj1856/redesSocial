import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider} from '@angular/fire/auth';
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

  singInWithGoogle(){
    const provider = new GoogleAuthProvider()

    provider.setCustomParameters({prompt: 'select_account'})

    return signInWithPopup(this._auth,provider);
  }

  constructor() { } 
  
}

