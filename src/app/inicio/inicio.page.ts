import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../login/registra-usuario/usuario.service';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  listaUsuarios = {};

  constructor(public alertController:AlertController, private geolocation: Geolocation ,private usuarioService: UsuarioService) { }

  geo(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=> {
      alert("Longitud: "+ geoposition.coords.longitude + " || "+
      "Latitud: " + geoposition.coords.latitude);
    });
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'No disponible',
      message: 'Esta sección de la aplicación aun no se encuentra disponible.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  

  ngOnInit() {
  
    this.listaUsuarios=this.usuarioService.getUsuarios();

  }



}
