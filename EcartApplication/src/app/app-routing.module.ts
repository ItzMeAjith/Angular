import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { MycartComponent } from './mycart/mycart.component';
import { DetailsComponent } from './details/details.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'products', component:  ProductsComponent },
  { path: 'mycart', component:  MycartComponent },
  { path: 'details', component:  DetailsComponent },
  { path: 'addproduct', component:AddproductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
