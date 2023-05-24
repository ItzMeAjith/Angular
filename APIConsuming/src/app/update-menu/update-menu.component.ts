import { Component, OnInit } from '@angular/core';
import { HotelService } from '../Services/hotel.service';
import { Menu } from '../Services/Models/Menu';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit{
  constructor(private mn:HotelService){
  }

  id!:number;
  hotel:any
  Menu:Menu={
    itemId:0,
    itemName:'',
    itemPrice:0,
    itemCount:0
  }
onChange()
{
  for (const item of this.hotel) {
    if(item.id === this.id) {

    this.Menu.itemName = item.name;
    this.Menu.itemPrice=item.price;
    this.Menu.itemCount=item.count;
  }
}
}
  getMenuID()
  {
      return this.mn.UpdateMenu(this.id,this.Menu).subscribe(menu => console.log(menu)),alert("Item ID"+this.id+" updated Successfully!!!");

  }
  ngOnInit(): void {
    this.hotel = this.mn.getMenu().subscribe(menus => this.hotel =menus);

  }
//   for (const item of this.hotel) {
//     if(item.id === this.id) {
//     this.Menu.itemName = item.name;
//     this.Menu.itemPrice=item.price;
//     this.Menu.itemCount=item.count;
//   }
// }

}
