import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public selectedIndex = 0;
  public appPages =[
    {title: "Notas",
    url: "/note"}
  ]

  constructor(
    private platform: Platform,
    public router: Router
  ) {
    this.initializeApp();
    }

  initializeApp(){
    this.platform.ready().then(()=>{
    this.router.navigateByUrl('animacion');
    });
  }


}
