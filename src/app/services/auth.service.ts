import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,sendPasswordResetEmail} from '@angular/fire/auth';
import { User } from '../interface/user';
import { FeedsServiceService } from './feeds-service.service';
import { addDoc, collection } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';


export type UserCreate = Omit<User,'id'>

const PATH = 'User'


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _auth = inject(Auth) 
  private _taskService = inject(FeedsServiceService)
  private _firestore = inject(Firestore);
  private _collection = collection(this._firestore,PATH)
  
  
  recoverPassword(email:string) {
    return sendPasswordResetEmail(this._auth, email);
  }
  singUP(usuario:User)  {

    addDoc(this._collection, usuario);
    return createUserWithEmailAndPassword(this._auth, usuario.email,usuario.password);
  }

  singIn(email:string,password:string){
    return signInWithEmailAndPassword(this._auth, email, password)
  }

  singInWithGoogle(){
    const provider = new GoogleAuthProvider()

    provider.setCustomParameters({prompt: 'select_account'})

    return signInWithPopup(this._auth,provider);
  }

  constructor() { } 
  
}

