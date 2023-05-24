import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent {
  constructor(private prod:ProductsComponent){}
  product:any[]=this.prod.products
}
