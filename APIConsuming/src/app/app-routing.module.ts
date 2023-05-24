import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { DeleteMenuComponent } from './delete-menu/delete-menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';

const routes: Routes = [
  {path: 'menu', component:MenuListComponent},
  {path: 'id', component:MenuDetailComponent},
  {path: 'insert', component:AddMenuComponent},
  {path: 'update', component:UpdateMenuComponent},
  {path: 'delete', component:DeleteMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
