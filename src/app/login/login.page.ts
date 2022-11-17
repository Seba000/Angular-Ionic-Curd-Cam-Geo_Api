import { UsuarioService } from './registra-usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from './registra-usuario/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user={
    usuario:'',
    password:''
  };
  usuarioServiceS: Usuario;
   campo: string;

  constructor(private router: Router,
  private toastController: ToastController,
  private usuarioService: UsuarioService,) {   }

  ngOnInit(){
  
  }
  ingresar(){
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.user 
      }
    };
    if(this.validateModel(this.user)){
      this.usuarioServiceS=this.usuarioService.getUsuario(this.user.usuario);
      if(this.usuarioService.getUsuario(this.user.usuario).password === this.user.password){
        this.router.navigate(['/inicio'],navigationExtras); 
        this.presentToast('Ingresaste correctamente');
      }else{
        this.presentToast('Usuario o password no validos');
      }
    }
    else
    {
      this.presentToast('Falta completar: '+this.campo);
    }

  }
   /**
    *  
   * @param message 
   * @param duration 
   */
    async presentToast(message: string, duration?: number){
      const toast = await this.toastController.create(
        {
          message,
          duration:duration?duration:2000
        }
      );
      toast.present();
    }
 
    validateModel(model: any){
    for (const [key, value] of Object.entries(model)) {
      if (value==='') {
        this.campo=key;
        return false;
      }
    }
    return true;
  }
}