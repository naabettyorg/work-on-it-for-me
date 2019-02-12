import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imageUrls = [
    '../assets/PICS/87.jpg',
    '../assets/PICS/91.jpeg',
    '../assets/PICS/3612455_img20160414185146_jpeg07a39dc22b52ac1833e825e10a9b75dc.jpg',
    '../assets/PICS/edgar-chaparro-565268-unsplash.jpg',
    '../assets/PICS/maxresdefault (1).jpg',
    '../assets/PICS/87.jpg',
    '../assets/PICS/87.jpg',
    '../assets/PICS/87.jpg',
    '../assets/PICS/87.jpg',
    '../assets/PICS/logo.png'
  ]

}
