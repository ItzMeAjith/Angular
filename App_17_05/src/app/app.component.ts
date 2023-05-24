import { Component,Injectable } from '@angular/core';
import {ProductsComponent } from './products/products.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent  {
  name: string = "KANINI";
  message?: string;
  // @Injectable() pro1: ProductsComponent;
  // msg:string =new ProductsComponent().newmsg;
  pro:any = new ProductsComponent().products;
  msg?: string;
  constructor(pro1:ProductsComponent)
  {
    this.msg =pro1.newmsg
  }



}
