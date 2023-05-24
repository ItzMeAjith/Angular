import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  // public products:any;
  public products: any[] = [
    {
      name: 'SAMSUNG Galaxy S21 FE 5G ',
      description: '(Lavender, 128 GB)  (8 GB RAM)',
      price: 35499,
      image: 'assets/s21pink.webp'
    },
    {
      name: 'Infinix SMART 7 ',
      description: '(Azure Blue, 64 GB)  (4 GB RAM)',
      price: 8000,
      image: 'assets/T7.webp'
    },
    {
      name: 'SAMSUNG Galaxy S21 FE 5G ',
      description: ' (Olive Green, 128 GB)  (8 GB RAM)',
      price: 35000,
      image: 'assets/galaxys21green.webp'
    },
    {
      name: 'SAMSUNG Galaxy S21 FE 5G ',
      description: ' (Olive Green, 128 GB)  (8 GB RAM)',
      price: 35000,
      image: 'assets/galaxys21green.webp'
    },
    {
      name: 'SAMSUNG Galaxy S21 FE 5G ',
      description: ' (Olive Green, 128 GB)  (8 GB RAM)',
      price: 35000,
      image: 'assets/galaxys21green.webp'
    },
    {
      name: 'SAMSUNG Galaxy S21 FE 5G ',
      description: ' (Olive Green, 128 GB)  (8 GB RAM)',
      price: 35000,
      image: 'assets/galaxys21green.webp'
    },
    {
      name: 'SAMSUNG Galaxy S21 FE 5G ',
      description: ' (Olive Green, 128 GB)  (8 GB RAM)',
      price: 35000,
      image: 'assets/galaxys21green.webp'
    },
    {
      name: 'SAMSUNG Galaxy S21 FE 5G ',
      description: ' (Olive Green, 128 GB)  (8 GB RAM)',
      price: 35000,
      image: 'assets/galaxys21green.webp'
    }

  ]




  buyNow(product: any)
  {
    console.log(product);
  }
}
