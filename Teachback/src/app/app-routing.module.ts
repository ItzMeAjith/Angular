import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { MycartComponent } from './mycart/mycart.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'products', component:  ProductsComponent },
  { path: 'Mycart', component:MycartComponent },
  { path: 'details', component:DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
