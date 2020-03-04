import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

  constructor() { }

  // banner = {}
  banner = [
    {
      h1: "Aftermarket Turbocharger Specialist1",
      h2: "Top Quality1",
      buttonName: "Shopping Now1",
      link: "shop.html",
      image: "assets/img/slider/slider1.jpg",
    },
    {
      h1: "Aftermarket Turbocharger Specialist2",
      h2: "Top Quality2",
      buttonName: "Shopping Now2",
      link: "shop.html",
      image: "assets/img/slider/slider2.jpg",
    },
    {
      h1: "Aftermarket Turbocharger Specialist3",
      h2: "Top Quality3",
      buttonName: "Shopping Now3",
      link: "shop.html",
      image: "assets/img/slider/slider3.jpg",
    }
  ]


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  ngOnInit(): void {
  }

}
