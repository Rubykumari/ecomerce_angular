import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { login, SignUp } from '../data-type';
import {BehaviorSubject} from 'rxjs'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(
    private http: HttpClient,
    private router:Router
  ) { }
  sellerSignUp(data:SignUp){
     (this.http.post('http://localhost:3000/seller',data, {observe:'response'})).subscribe(res=>{
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(res.body))
      this.router.navigate(['seller-home'])
     });
  }
  sellerLogin(data:login){
    //console.log(data, "Login data");
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, {observe:'response'}).subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        console.log(result, "User LoggedIn")
      }
      else{
        console.log(result, "User failed to LoggedIn")
      }
    })
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home'])
    }
  }
}
