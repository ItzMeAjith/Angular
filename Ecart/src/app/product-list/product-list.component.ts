import { Component } from '@angular/core';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private pro:ProductsService)
  {

  }
    PDetails:any=this.pro.getProductDetail().subscribe(x=>this.PDetails =x);
}
