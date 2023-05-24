import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
array:number[] = [1,2,3,4,5,6,7,8,9,10,11];
products: any[] = [
  {
    name: 'Redmi Note 11',
    description: 'This is the description of Product 1.',
    price: 19.99,
    image: 'assets/RedmiNote11.jfif'
  },
  {
    name: 'Product 2',
    description: 'This is the description of Product 2.',
    price: 24.99,
    image: 'assets/RedmiNote11.jfif'
  },
  {
    name: 'Product 3',
    description: 'This is the description of Product 3.',
    price: 29.99,
    image: 'assets/RedmiNote11.jfif'
  },
  {
    name: 'Product 3',
    description: 'This is the description of Product 3.',
    price: 29.99,
    image: 'assets/RedmiNote11.jfif'
  },{
    name: 'Product 3',
    description: 'This is the description of Product 3.',
    price: 29.99,
    image: 'assets/RedmiNote11.jfif'
  },{
    name: 'Product 3',
    description: 'This is the description of Product 3.',
    price: 29.99,
    image: 'assets/RedmiNote11.jfif'
  }
];











}
