import { Component } from '@angular/core';
import { HotelService } from '../Services/hotel.service';
import { Menu } from '../Services/Models/Menu';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {
  constructor(private mn:HotelService){}
  Menu:Menu={
    itemName:'',
    itemPrice:0,
    itemCount:0
  }
  getMenuID()
  {
      return this.mn.createMenuItem(this.Menu).subscribe(menu => console.log(menu)),alert("New menu added successfully!!! ");

  }
}
