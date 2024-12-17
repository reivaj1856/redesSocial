import { User } from "./user";

export interface Group{
  id: string;
  titulo: string;
  texto: string;
  enlace: string;
  Usuarios: String[];
}