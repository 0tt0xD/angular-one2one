import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  notMain : boolean = true;

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  showMain() {
    this.router.navigate(['/'])
  }

}
