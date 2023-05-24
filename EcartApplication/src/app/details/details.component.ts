import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  //  constructor(private prod:ProductsComponent){}
   product:any;
  constructor(){
    this.product=new ProductsComponent().products;

  }
  onDelete(index: number) {
    this.product.splice(index, 1);
  }



}
