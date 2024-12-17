import { Component, effect, inject, input } from '@angular/core';
import { Post } from '../../../../interface/post';
import { realService } from '../../../../services/reals.service';
import { Group } from '../../../../interface/group';
import { User } from '../../../../interface/user';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import db from '../../../../../environments/environment';
import { getAuth,  } from "firebase/auth";
import { eventCreate } from '../event-model/event-model.component';
import { Eventos } from '../../../../interface/event';

const auth = getAuth();

@Component({
  selector: 'app-event-utils',
  standalone: true,
  imports: [],
  templateUrl: './event-utils.component.html',
  styleUrl: './event-utils.component.css'
})
export default class EventUtilsComponent {
  
  events = input.required<Eventos[]>();
  
  
  private _taskService = inject(realService)
  private user: string[] = [];
  async unirse(id: string) {
    try {
      // Crea una referencia al documento específico en la colección "User"
      const docRef = doc(db, "eventos", id);
      console.log(id)
      
      // Recupera el documento
      const docSnap = await getDoc(docRef);
      // Verifica si el documento existe
      if (docSnap.exists()) {
        const userData = docSnap.data(); // Recupera los datos del documento
        this.user = userData["Usuarios"];
        this.agregarItem((String(auth.currentUser?.email)),this.user)
        const group :eventCreate = {
          titulo: userData["titulo"] || '', 
          texto: userData["texto"] || '',
          enlace: userData["enlace"]|| '',
          Usuarios: this.user ||'',
        };
        
        this._taskService.updateE(group,id)
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error retrieving document:", error)
    }
  }
  agregarItem(nuevoItem: string,items:string[]) {
    // Verificar si el arreglo ya contiene el nuevo ítem
    if (!items.includes(nuevoItem)) {
      items.push(nuevoItem);  // Solo agrega si no está presente
    } else {
      console.log('El ítem ya existe');
    }
  }
}
