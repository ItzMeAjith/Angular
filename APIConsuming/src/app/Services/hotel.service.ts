import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Menu } from './Models/Menu';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }

  getMenu():Observable<Menu[]>
  {
    return this.http.get<Menu[]>('https://localhost:7012/api/API_Menu');
  }

  getMenuByID(id:number):Observable<Menu>
  {
    return this.http.get<Menu>(`https://localhost:7012/api/API_Menu/${id}`);
  }
  createMenuItem(item:Menu):Observable<Menu>
  {
    return this.http.post<Menu>('https://localhost:7012/api/API_Menu',item);
  }
  DeleteMenu(id:number):Observable<Menu>
  {
    return this.http.delete<Menu>(`https://localhost:7012/api/API_Menu/${id}`);
  }

  UpdateMenu(id:number,item:Menu):Observable<Menu>
  {
    return this.http.put<Menu>(`https://localhost:7012/api/API_Menu/${id}`,item);
  }
}
