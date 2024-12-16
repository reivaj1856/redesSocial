import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc ,collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Publicacion } from '../interface/publicacion';
import { Post } from '../interface/post';
import { pouestCreate } from '../components/private/home-reals/model-doc/model-doc.component';
import { doc, updateDoc } from 'firebase/firestore';


export type realsCreate = Omit<Post,'id'>

const PATH = 'post'

@Injectable({
  providedIn: 'root'
})
export class realService {

  constructor() { }
  
  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore,PATH)

  getPost = toSignal(collectionData(this._collection, {idField: 'id'}) as Observable  <Post[]>  ,{initialValue: []})

  create(poust: pouestCreate){
    return addDoc(this._collection, poust)
  }
  update(poust: pouestCreate,id:string){
    const docRef = doc(this._collection,id)
    return updateDoc(docRef, poust)
  }
}
