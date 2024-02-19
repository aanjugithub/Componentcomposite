import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-fakestore',
  templateUrl: './fakestore.component.html',
  styleUrls: ['./fakestore.component.css']
})
export class FakestoreComponent {
  products:any
  constructor(private http:HttpClient) {

    this.http.get("https://fakestoreapi.com/products").subscribe(data=>this.products=data)


}
}
