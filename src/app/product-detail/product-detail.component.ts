import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';  // 导入购物车服务。
import { NzModalService } from 'ng-zorro-antd/modal'; // 导入modal服务

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product={};

  // ActivatedRoute 专门用于由 Angular 路由器加载的每个路由组件。
  // 它包含关于该路由，路由参数以及与该路由关联的其它数据的信息。
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private modalService: NzModalService,
    ) {
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    // window.alert('Your product has been added to the cart!');
    this.modalService.success({
      nzTitle: `${product.name}商品已加入购物车`,
      // nzContent: `<p>${name}</p>`,
      nzOnOk: () => console.log('Info OK')
    });
    this.cartService.addToCart(product);
  }
}
