import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { FormsModule } from '@angular/forms';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { DeleteMenuComponent } from './delete-menu/delete-menu.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    MenuDetailComponent,
    AddMenuComponent,
    DeleteMenuComponent,
    UpdateMenuComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
