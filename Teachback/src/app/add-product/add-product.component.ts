import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

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
    this.pro.products.push(this.newProduct);
    this.newProduct = {};
    alert("New Product Added!!!");

    this.closeForm();
  }
}
