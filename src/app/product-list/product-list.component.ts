import { Component } from '@angular/core';

import { products } from '../products';
/**
 * 一个组件类，它用来处理数据和功能。上一节，我们在组件类中定义了商品数据和 share() 方法。
 */
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.componentcopy.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products; // 定义属性值 变量

  share(name:string) {
    console.log(name);
    window.alert(`${name}The product has been shared!`);
  }

  // 接下来，定义单击该按钮时应该发生的行为。回想一下，应该由父组件（商品列表组件）采取行动，而不是商品提醒组件。
  // 在 product-list.component.ts 文件中，定义一个 onNotify() 方法，类似于 share() 方法：
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/