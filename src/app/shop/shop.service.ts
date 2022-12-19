import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Brand } from '../shared/models/brand';
import { pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';
import { Type } from '../shared/models/productType';
import { ShopParam } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = 'https://localhost:44342/api/';

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParam){
    let params= new HttpParams();

    if(shopParams.brandId !== 0){
        params = params.append('brandId',shopParams.brandId.toString());
    }

    if(shopParams.typeId !== 0){
      params = params.append('typeId', shopParams.typeId.toString());
    }

    if(shopParams.search){
      params = params.append('search', shopParams.search);
    }

    params = params.append('sort',shopParams.sort);
    params = params.append('pageIndex',shopParams.pageNumber.toString());
    params = params.append('PageSize',shopParams.pageSize.toString());

    return this.http.get<pagination>(this.baseUrl + 'products', { observe: 'response', params })
    .pipe(
      map(response => {
        return response.body;
      })
    )
}

 getProduct(id: number){
  return this.http.get<Product>(this.baseUrl + 'products/' + id);
 }
  getBrands(){
    return this.http.get<Brand[]>(this.baseUrl + "products/brands");
  }

  getTypes(){
    return this.http.get<Type[]>(this.baseUrl + 'products/types');
  }
}
