import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuarios: Array<{ id: number, nome: string, login: string, senha: string, email:
    string, img: string, icon: string }>;

  usuariologado:string="";

  constructor() { 

    this.usuarios = [
      { id: 1002, nome: 'Felipe', login: 'felipe', senha: '123',
      email: 'felipe@teste.com', img: '', icon: 'start' },
      { id: 1006, nome: 'Flavio', login: 'flavio', senha: '123',
      email: 'flavio@teste.com', img: '', icon: 'start' }
      ]

  }
}
