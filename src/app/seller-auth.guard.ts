import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from './services/seller.service';

@Injectable({
  providedIn:'root'
})
export class sellerAuthGuard implements CanActivate {
  constructor(private sellerService:SellerService){
  }
  canActivate(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
  {
    if(localStorage.getItem('seller')){
      return true;
    }
    return this.sellerService.isSellerLoggedIn;
  }
};  
