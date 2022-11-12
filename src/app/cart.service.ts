import { Injectable } from '@angular/core';
import { Product } from './products';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[]=[];
  constructor() { }
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

}
