import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './products';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[]=[];
  constructor(
    private http:HttpClient
  ) { }

  // 添加到购物车
  addToCart(product:Product){
    this.items.push(product);
  }
  // 收集用户购物车中的商品
  getItems(){
    return this.items;
  }
  // 清楚用户的购物车
  clearCart(){
    this.items = [];
    return this.items;
  }

  // 获取商品运费价格 使用HttpClient 的get() 方法
  getShippingPrices(){
    return this.http.get<{type:string,price:number}[]>('/assets/shipping.json')
  }

}
