import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment} from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService} from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService} from './category.service';
import { FormsModule} from '@angular/forms';
import { ProductService} from './product.service';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService} from './shopping-cart.service';
import { SignupComponent } from './signup/signup.component';







@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ShoppingCartComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    CustomFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    HttpClient,
    ShoppingCartService,
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
