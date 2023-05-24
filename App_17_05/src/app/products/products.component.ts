import { Component,Input,EventEmitter,Output } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent
{
  @Input() parentData: any;
  newmsg: string = "Mew msg for identification";
  @Output() childEvent = new EventEmitter();
  Pass()
  {
    return this.childEvent.emit("Received child event");
  }
  ans?: string;
  products: Product[] = [
    { productID: 111, productName: "TV", productPrice: 60000, orderDate: new Date() },
    { productID: 112, productName: "Laptop", productPrice: 50000, orderDate: new Date() },
    { productID: 113, productName: "Pendrive", productPrice: 1500, orderDate: new Date() },
    {productID:114,productName: "Iphone",productPrice: 150000,orderDate: new Date()}
  ]

  getIndex(aa:number)
  {
    console.log(this.products[aa].productName);
  }
}
 class Product
{
  productID!: number;
  productName?: string;
  productPrice?: number;
  orderDate?: Date;
}
