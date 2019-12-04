import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


// 注意 @Component 装饰器。这表明它下面的类是一个组件。它提供了有关该组件的元数据，包括它的模板、样式和选择器。

// 该 selector 用于标识该组件。该选择器是当 Angular 组件在页面中渲染出 HTML 元素时使用的名字。按照惯例，Angular 组件选择器会以前缀 app- 开头，后跟组件名称。

// 模板和样式文件名。它们是对另外两个生成的文件的引用。

// 组件定义中还包含一个导出类（ ProductAlertsComponent ），用于处理该组件的功能。
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {
  // 在 ProductAlertsComponent 类的定义中，定义一个带 @Input 装饰器的 product 属性。
  // @Input 装饰器指出其属性值是从组件的父组件（在本例中就是商品列表组件）中传入的。

  @Input() product;
  
  // 通过 setter 截听输入属性值的变化

  // private _name = '';
 
  // @Input()
  // set name(name: string) {
  //   this._name = (name && name.trim()) || '<no name set>';
  // }
 
  // get name(): string { return this._name; }
  // 在组件类中，用 @Output 装饰器和一个事件发射器（EventEmitter）
  // 实例定义一个名为 notify 的属性。这可以让商品提醒组件在 notify 属性发生变化时发出事件。
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
