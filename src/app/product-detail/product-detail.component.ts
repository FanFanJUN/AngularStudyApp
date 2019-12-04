import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;

  // ActivatedRoute 专门用于由 Angular 路由器加载的每个路由组件。
  // 它包含关于该路由，路由参数以及与该路由关联的其它数据的信息。
  constructor(private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
