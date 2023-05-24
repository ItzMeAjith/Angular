import { Component } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  selectedValue!: string;
  cat: string=this.selectedValue;
  PDetails: any[] = [];
  filteredProducts: any[] = [];

  constructor(private pro: ProductsService) {}

  ngOnInit() {
    this.pro.getProductDetail().subscribe((products: any[]) => {
      this.PDetails = products;
      this.filterProductsByCategory();
    });
  }

  filterProductsByCategory(): void {

    if (this.cat) {
      this.filteredProducts = this.PDetails.filter(
        product => product.ProductCategory?.toLowerCase() === this.cat.toLowerCase()
      );
    } else {
      this.filteredProducts = this.PDetails;
    }
  }
}
