import { Component, OnInit } from '@angular/core';
import { Getapi1Service } from './getapi1.service';

@Component({
  selector: 'app-generarqr',
  templateUrl: './generarqr.page.html',
  styleUrls: ['./generarqr.page.scss'],
})
export class GenerarqrPage implements OnInit {
  getdata:any[]=[];

  constructor(public _service: Getapi1Service) { 
    
    this._service.getdata<any[]>("").subscribe(data => {
      this.getdata = data
      console.log(this.getdata);
    })

  }

  ngOnInit() {
  }

}
