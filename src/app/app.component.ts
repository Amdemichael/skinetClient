import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pagination } from './models/pagination';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'skinetClient';
  products: Product[] | undefined;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get('https://localhost:44342/api/products?pageSize=50').subscribe((response: pagination) => {
      this.products = response.data;
    }, error => {
      console.log(error);
    })
  }

}
