import { Component, OnInit } from '@angular/core';
import { Getapi1Service } from '../generarqr/getapi1.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.page.html',
  styleUrls: ['./us.page.scss'],
})
export class UsPage implements OnInit {

  getdata:any[]=[];

  constructor(public _service:Getapi1Service) { 
    this._service.getdata5<any[]>("").subscribe(data => {
      this.getdata = data
      console.log(this.getdata);
    })
  }

  ngOnInit() {
  }

}
