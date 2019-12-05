import { Injectable } from '@angular/core';
/**
 * 服务可以让你在应用的各个部件之间共享数据
 */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = []; // 定义一个 items 属性来把当前商品的列表（数组）存储在购物车中。
constructor() { 
  
}
addToCart(product) {
  this.items.push(product);
}

getItems() {
  return this.items;
}

clearCart() {
  this.items = [];
  return this.items;
}
}
