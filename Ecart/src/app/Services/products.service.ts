import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,filter } from 'rxjs/operators'
import { IProducts } from 'src/assets/IProducts';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url:string='assets/products.json';
  constructor(private http:HttpClient) { }

  public getProductDetail():Observable<IProducts[]>
  {
    return this.http.get<IProducts[]>(this.url);
  }

  public getProductBtCategory(procat:string): Observable<IProducts> {
    return this.http.get<IProducts[]>(this.url)
      .pipe(
        map(products => products.find(product => product.ProductCategory === procat)),
        filter(product => !!product),
        map(product => product as IProducts)
      );
  }

  public GetProductsCategory(cat: string): Observable<IProducts | undefined> {
    return this.getProductDetail().pipe(
      map(Products => Products.find(Products=> Products.ProductCategory === cat))
    );
  }


}
