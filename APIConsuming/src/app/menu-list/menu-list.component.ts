import { Component, OnInit } from '@angular/core';
import { HotelService } from '../Services/hotel.service';
import { Menu } from '../Services/Models/Menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  Menus?:Menu[]
  hotel:any
constructor(private mn:HotelService){}
  ngOnInit(): void
  {
    this.hotel = this.mn.getMenu().subscribe(menus => this.hotel =menus);
  }
  getAll()
  {

    return this.mn.getMenu().subscribe(menus => this.hotel =menus);
  }


}
