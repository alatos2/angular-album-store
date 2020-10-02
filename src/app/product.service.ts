import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { Album } from './album';
import { Product } from './product';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map(response => <Album>response.json());
    // return this._http.get(this._albumUrl);
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl).map(response => <Product[]>response.json());
  }

}
