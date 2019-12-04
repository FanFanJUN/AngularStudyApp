import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {TopBarComponent} from './top-bar/top-bar.component'
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import {ProductDetailComponent} from './product-detail/product-detail.component'
// 引入antd angular组件
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
/** 导入 ng-zorro-antd 模块 **/
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
/**定义了名为 AppModule 的根模块，
 * 它会告诉 Angular 如何组装应用。
 * 这里最初只声明一个 AppComponent。
 * 当你向应用中添加更多组件时，它们也必须在这里声明。
 *  path 路由位置 http://localhost:4200/test
 *  component 路由对应组件
 * */
// npm install ng-zorro-antd --save  引入组件
// https://ng.ant.design/docs/getting-started/zh
@NgModule({
   declarations: [
      AppComponent,
      ProductListComponent,
      TopBarComponent,
      ProductAlertsComponent,
      ProductDetailComponent,
      // NzButtonModule,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      // NzButtonModule, // 按钮
      // NzTableModule, // 表格
      /** 导入 ng-zorro-antd 模块 **/
      NgZorroAntdModule,
      
      // Angular 路由器
      RouterModule.forRoot([
         { path: '', component: ProductListComponent },
         { path: 'products/:productId', component: ProductDetailComponent },
       ])
   ],
   /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
  providers   : [
   { provide: NZ_I18N, useValue: zh_CN }
  ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
