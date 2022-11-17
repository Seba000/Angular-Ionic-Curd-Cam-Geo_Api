import { Component, OnInit } from '@angular/core';
import { Getapi1Service } from '../generarqr/getapi1.service';

@Component({
  selector: 'app-ca',
  templateUrl: './ca.page.html',
  styleUrls: ['./ca.page.scss'],
})
export class CaPage implements OnInit {

  getdata:any[]=[];

  constructor(public _service:Getapi1Service) { 
    this._service.getdata4<any[]>("").subscribe(data => {
      this.getdata = data
      console.log(this.getdata);
    })
  }
  ngOnInit() {
  }

}
