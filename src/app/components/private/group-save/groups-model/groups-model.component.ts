import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { realService } from '../../../../services/reals.service';
import { Router } from '@angular/router';
import { Post } from '../../../../interface/post';
import { toast } from 'ngx-sonner';
import { Comentario } from "../../../../interface/comentarios";
import { AuthService } from '../../../../services/auth.service';
import { user } from '@angular/fire/auth';
import { AuthStateService } from '../../../../segurity/acces/auth-state.service';

import { getAuth, onAuthStateChanged } from "firebase/auth";

export type pouestCreate = Omit<Post,'id'>
export type comentCreate = Omit<Comentario,'id'>


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

@Component({
  selector: 'app-groups-model',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule],
  templateUrl: './groups-model.component.html',
  styleUrl: './groups-model.component.css'
})
export class GroupsModelDocComponent {
  constructor(public _matDialogoRef:MatDialogRef <GroupsModelDocComponent>, private afAuth: AuthService ){}
  
  
  
  email: string = String(auth.currentUser?.email); 
  private _formBuilder = inject(FormBuilder);
    private _taskService = inject(realService)
    private _router = inject(Router)
  

    loading = signal(false);
  
    form= this._formBuilder.group({
      titulo: this._formBuilder.control('',Validators.required),
      texto: this._formBuilder.control('',Validators.required),
      enlace: this._formBuilder.control('',Validators.required),
    })

  async submit(){
      if(this.form.invalid) return;
      try{
        
        this.loading.set(true);
        const fecha = new Date();
        const soloFecha = fecha.toLocaleDateString();
        const  {titulo,texto,enlace} = this.form.value;
        const pouest :pouestCreate = {
          titulo: titulo || '',
          usuario: this.email,
          fecha: soloFecha,
          texto: texto || '',
          enlace: enlace || '',
          like : 0 ,
        };
  
      await this._taskService.create(pouest)
      toast.success('publicacion exitosa')
      this._router.navigateByUrl('/content')
      }catch(error){
        toast.success('upds algo salio mal')
      } finally{
        this.loading.set(false);
      }
    }
   
  
}
