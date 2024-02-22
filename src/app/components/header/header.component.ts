import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuType: string = 'default'
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((route: any) => {
      console.warn(route.url, "Route")
      if (localStorage.getItem('seller') && route.url.includes("seller-home")) {
        this.menuType = 'seller'
      }
      else{
        this.menuType = 'default'
      }
    }
    )
  }
}
