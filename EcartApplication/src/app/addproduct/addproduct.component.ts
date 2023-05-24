import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  newProduct: any;

  constructor(private pro:ProductsComponent) {
    // Set the selectedProduct to the first product in the products array
    this.newProduct = {
      name: null,
      description: null,
      price: null,
      image:null
    };
  }

  isFormOpen: boolean = false;


  openForm() {
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
  }
  saveProduct() {
    // Implement logic to save the product
    if(this.newProduct.name ==null || this.newProduct.description ==null|| this.newProduct.price ==null || this.newProduct.image==null)
    {
      alert("Please Fill all the filds!!")
    }
    else
    {
      this.pro.products.push(this.newProduct);
      this.newProduct = {};
      alert("New Product Added!!!");
    }


    this.closeForm();
  }
}
