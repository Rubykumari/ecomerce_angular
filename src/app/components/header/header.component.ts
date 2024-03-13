import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuType: string = 'default'
  sellerName:string='';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((route: any) => {
      if (localStorage.getItem('seller') && route.url.includes("seller")) {
        this.menuType = 'seller';
        let sellerStorage = localStorage.getItem('seller')
        // if sellerStorage has some data then convert it into object 
        let sellerData = (sellerStorage && JSON.parse(sellerStorage))
        console.log(sellerData, "SellerData")
        this.sellerName = sellerData[0].name;
      }
      else{
        this.menuType = 'default'
      }
    }
    )
  }
  sellerLogout(){
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }
}
