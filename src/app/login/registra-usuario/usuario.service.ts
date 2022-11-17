import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuario= [];

  constructor() {}

  getUsuarios()
  {
    return[...this.listaUsuario]
  }

  getUsuario(usuarioInput: string)
  {
    return {
            ...this.listaUsuario.find(usuario => {return usuario.usuario === usuarioInput })
           }
  }

  addUsuario(nombre: string, apellidos: string, usuario: string, password: string)
  {
    this.listaUsuario.push(
      {
        nombre,
        apellidos,
        usuario,
        password
      });
  }
}
