import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc ,collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Publicacion } from '../interface/publicacion';
import { Post } from '../interface/post';
import { pouestCreate } from '../components/private/home-reals/model-doc/model-doc.component';
import { doc, updateDoc } from 'firebase/firestore';
import { Group } from '../interface/group';
import { User } from '../interface/user';
import { Eventos } from '../interface/event';


export type UserCreate = Omit<User,'id'>
export type realsCreate = Omit<Post,'id'>
export type groupCreate = Omit<Group,'id'>
export type eventCreate = Omit<Eventos,'id'>

const PATH2 = 'user'
const PATH = 'post'
const PATH1 = 'group'
const PATH3 = 'eventos'

@Injectable({
  providedIn: 'root'
})
export class realService {

  constructor() { }
  
  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore,PATH)
  private _collection1 = collection(this._firestore,PATH1)
  private _collection2 = collection(this._firestore,PATH2)
  private _collection3 = collection(this._firestore,PATH3)

  getPost = toSignal(collectionData(this._collection, {idField: 'id'}) as Observable  <Post[]>  ,{initialValue: []})

  getGroup = toSignal(collectionData(this._collection1, {idField: 'id'}) as Observable  <Group[]>  ,{initialValue: []})

  getEventos = toSignal(collectionData(this._collection3, {idField: 'id'}) as Observable  <Eventos[]>  ,{initialValue: []})
  
  create(poust: pouestCreate){
    return addDoc(this._collection, poust)
  }
  createG(poust: groupCreate){
    return addDoc(this._collection1, poust)
  }
  createU(user: UserCreate){
    return addDoc(this._collection2, user)
  } 
  createE(event: eventCreate){
    return addDoc(this._collection3, event)
  }
 
  update(poust: pouestCreate,id:string){
    const docRef = doc(this._collection,id)
    return updateDoc(docRef, poust)
  }
  updateG(group: groupCreate,id:string){
    const docRef = doc(this._collection1,id)
    return updateDoc(docRef, group)
  }
  updateE(event: eventCreate,id:string){
    const docRef = doc(this._collection3,id)
    return updateDoc(docRef, event)
  }
}
