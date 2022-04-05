import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarios: any;
  login: string = '';
  senha: string = '';
  mensagem: string = '';

  constructor(loginService:LoginService,
    public alertController: AlertController,
    public router:Router) { 
    this.usuarios=loginService.usuarios;
  }

  ngOnInit() {
  }

  entrar(campoLogin, campoSenha) {
    this.login = campoLogin;
    this.senha = campoSenha;
    if (this.login == this.usuarios[0].login && this.senha == this.usuarios[0].senha ) {
    this.mensagem = 'Olá ' + this.usuarios[0].nome + ' sua credencial está correta,seja bem-vindo!';
    console.log(this.login);
    localStorage.setItem("usuarioLogado",this.login);
    this.router.navigateByUrl('/bemvindo');
    }else{
    
      this.mostrarAlert();
    }
  }

  async mostrarAlert() {
    const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Erro de Login',
    message: 'Login Inválido! Tente Novamente.',
    buttons: [
     {
    text: 'Ok',
    role: 'ok',
    handler: () => {
    console.log('Confirm Ok');
    }
    }
    ]
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    }

}
