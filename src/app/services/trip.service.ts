import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { TRIP } from '../mocks/trip.mock';
import { Trip } from '../models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor() { }

getTrip(): Observable<Trip[]> {
  return of (TRIP);

}

}
