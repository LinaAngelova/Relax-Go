import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{

  images= [
      {id: 1, 
       label: "Vacanze al mare"},

      {id: 2,
       label: "Vacanze in Europa"}
  ];

  percorso = "../assets/images/carousel-";

  constructor() {};

  ngOnInit(): void {
  
  }

}
