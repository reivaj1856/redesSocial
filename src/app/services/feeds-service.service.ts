import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc ,collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Publicacion{
  id: string;
  titulo: string;
  subtitulo: string;
  fecha: string;
  texto: string;
  enlace: string;
}

export type PublicacionCreate = Omit<Publicacion,'id'>

const PATH = 'publicacion'

@Injectable({
  providedIn: 'root'
})
export class FeedsServiceService {

  constructor() { }
  
  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore,PATH)

  getPublicacion = toSignal(collectionData(this._collection, {idField: 'id'}) as Observable  <Publicacion[]>  ,{initialValue: []})

  create(publicacion: PublicacionCreate){
    return addDoc(this._collection, publicacion)
  }
}
