import { Component, OnInit } from '@angular/core';
import { Getapi1Service } from '../generarqr/getapi1.service';

@Component({
  selector: 'app-leerqr',
  templateUrl: './leerqr.page.html',
  styleUrls: ['./leerqr.page.scss'],
})
export class LeerqrPage implements OnInit {

  getdata:any[]=[];

  constructor(public _service:Getapi1Service) { 
    this._service.getdata2<any[]>("").subscribe(data => {
      this.getdata = data
      console.log(this.getdata);
    })
  }

  ngOnInit() {
  }

}
