import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';
import { IProduct } from 'src/assets/Data/IProducts';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  url:string = "assets/Data/product.json";

  public getAllProducts():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.url);
  }
}
