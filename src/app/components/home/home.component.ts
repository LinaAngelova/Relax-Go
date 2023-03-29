import { Component,OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
evidenziato=false;
 
constructor (private tripService: TripService){}

  ngOnInit(): void {}



welcome="Relax";
onEvidenziazione(){
this.evidenziato= !this.evidenziato;
  }

}
