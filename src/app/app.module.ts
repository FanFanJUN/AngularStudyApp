import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {TopBarComponent} from './top-bar/top-bar.component'
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import {ProductDetailComponent} from './product-detail/product-detail.component'
/**定义了名为 AppModule 的根模块，
 * 它会告诉 Angular 如何组装应用。
 * 这里最初只声明一个 AppComponent。
 * 当你向应用中添加更多组件时，它们也必须在这里声明。
 *  path 路由位置 http://localhost:4200/test
 *  component 路由对应组件
 * */
@NgModule({
   declarations: [
      AppComponent,
      ProductListComponent,
      TopBarComponent,
      ProductAlertsComponent,
      ProductDetailComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      // Angular 路由器
      RouterModule.forRoot([
         { path: '', component: ProductListComponent },
         { path: 'products/:productId', component: ProductDetailComponent },
       ])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
