import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioService} from './usuario.service';
@Component({
  selector: 'app-registra-usuario',
  templateUrl: './registra-usuario.page.html',
  styleUrls: ['./registra-usuario.page.scss'],
})
export class RegistraUsuarioPage implements OnInit {
  usuario={
    nombre:'',
    apellidos:'',
    usuario:'',
    password:''
  };

  campo: string;
  constructor(private router: Router,public toastController: ToastController,
    private usuarioService: UsuarioService ) { }

  ngOnInit() {
  }
  
  registrarUsuario(){
    if(this.validateModel(this.usuario)){
        this.usuarioService.addUsuario(this.usuario.nombre.valueOf(),
          this.usuario.apellidos.valueOf(),
          this.usuario.usuario.valueOf(),
          this.usuario.password.valueOf());
          this.presentToast('Cuenta creada correctamente.');
          this.router.navigate(['/login']); 
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
    for (var [key, value] of Object.entries(model)) {
      if (value==='') {
        this.campo=key;
        return false;
      }
    }
    return true;
  }

}
function navigationExtras(arg0: string[], navigationExtras: any) {
  throw new Error('Function not implemented.');
}

