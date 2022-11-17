import { Component, OnInit } from '@angular/core';
import { Getapi1Service } from '../generarqr/getapi1.service';

@Component({
  selector: 'app-publicas',
  templateUrl: './publicas.page.html',
  styleUrls: ['./publicas.page.scss'],
})
export class PublicasPage implements OnInit {

  getdata:any[]=[];

  constructor(public _service:Getapi1Service) { 
    this._service.getdata3<any[]>("").subscribe(data => {
      this.getdata = data
      console.log(this.getdata);
    })
  }

  ngOnInit() {
  }
}