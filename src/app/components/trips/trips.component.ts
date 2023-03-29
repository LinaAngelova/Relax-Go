import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip.model';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})

export class TripsComponent implements OnInit {
  viaggi: Trip[] = []; 
    
  constructor(private tripService: TripService){}
  
  ngOnInit(): void {
  this.tripService.getTrip().subscribe({
        next: (response) => {
          this.viaggi = response;
        },
        error: (error) => {
          console.log(error);
        }
      })
    }

  
  }

  