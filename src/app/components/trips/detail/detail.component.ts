import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService} from 'src/app/services/trip.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
//   viaggio: Trip;

  constructor (
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tripService: TripService
  ){}

  
  ngOnInit(): void {
    // this.onGetTrip();
  }
}
//   onGetTrip(): void {
//     const id= Number(this.activatedRoute.snapshot.paramMap.get ('_id'));
//     this.tripService.getTrip(id).subscribe ({
//       next: (res) => {
//         this.viaggio= res;
//       },
//       error: (err) => {
//         console.log (err);
//       }
//     })
//   }

// }
