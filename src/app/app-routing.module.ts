import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SellerAuthComponent } from './pages/seller-auth/seller-auth.component';
import { CommonModule } from '@angular/common';
import { SellerHomeComponent } from './pages/seller-home/seller-home.component';
import { sellerAuthGuard } from './seller-auth.guard';
import { SellerAddProductComponent } from './pages/seller-add-product/seller-add-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent
  },
  {
    path: 'seller-add-product',
    component: SellerAddProductComponent,
    canActivate:[sellerAuthGuard]
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate:[sellerAuthGuard]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  