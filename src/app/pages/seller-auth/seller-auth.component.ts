import { Component, OnInit } from '@angular/core';
import { SignUp, login } from 'src/app/data-type';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit{
  constructor(
    private seller: SellerService,
    ) { }
  showLogin = false
  ngOnInit():void{
   this.seller.reloadSeller()
  //  localStorage.removeItem('seller');
  }

  signUp(data: SignUp): void {
    this.seller.sellerSignUp(data);
  }
  logIn(data:login):void{
   this.seller.sellerLogin(data);
  }
  openLogin(){
   this.showLogin = true
  }
  openSignUp(){
   this.showLogin = false
  }
}
