import { Component, OnInit } from '@angular/core';
import { Menu } from '../Services/Models/Menu';
import { HotelService } from '../Services/hotel.service';

@Component({
  selector: 'app-delete-menu',
  templateUrl: './delete-menu.component.html',
  styleUrls: ['./delete-menu.component.css']
})
export class DeleteMenuComponent implements OnInit {
  Menu?:Menu
  id!:number;
  hotel:any
constructor(private mn:HotelService){}
  getMenuID()
  {
      return this.mn.DeleteMenu(this.id).subscribe(menu =>this.Menu=menu),alert("Item ID"+this.id+" deleted Successfully!!!");
  }
  ngOnInit(): void
  {
    this.hotel = this.mn.getMenu().subscribe(menus => this.hotel =menus);
  }
}
