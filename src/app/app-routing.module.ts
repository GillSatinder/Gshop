import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {OrderSuccessComponent} from './order-success/order-success.component';
import {LoginComponent} from './login/login.component';
import {CheckOutComponent} from './check-out/check-out.component';
import {MyOrdersComponent} from './my-orders/my-orders.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {AdminProductsComponent} from './admin/admin-products/admin-products.component';
import {ProductFormComponent} from './admin/product-form/product-form.component';
import {AdminOrdersComponent} from './admin/admin-orders/admin-orders.component';
import {SignupComponent} from './signup/signup.component';
import {AuthGuardService} from './auth-guard.service';
/* tslint:disable */
const routes: Routes = [
  { path: '',
    component: ProductsComponent
  },

  { path: 'products',
    component: ProductsComponent
  },

  { path: 'login',
    component: LoginComponent
  },

  { path: 'shopping/cart',
    component: ShoppingCartComponent,
  },

  { path: 'order/success',
    component: OrderSuccessComponent
  },

  { path: 'check/out',
    component: CheckOutComponent
  },

  { path: 'my/orders',
    component: MyOrdersComponent,
    canActivate: [AuthGuardService]
  },

  { path: 'user/signup',
    component: SignupComponent
  },

  { path: 'admin/products/new',
    component: ProductFormComponent
  },

  { path: 'admin/products/:product_id',
    component: ProductFormComponent
  },

  { path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuardService]
  },

  { path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuardService]
  },

  { path: 'shopping-cart/products',
    component: ShoppingCartComponent
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
