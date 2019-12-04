import { Component } from '@angular/core';
/**
 * 为应用的根组件定义逻辑，名为 AppComponent 。
 * 当你向应用中添加组件和服务时，与这个根组件相关联的视图就会成为视图树的根
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAppTest';
}
