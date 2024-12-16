import { Comentario } from "./comentarios";

export interface Post{
  id: string;
  titulo: string;
  usuario: string;
  fecha: string;
  texto: string;
  enlace: string;
  like: number;
}