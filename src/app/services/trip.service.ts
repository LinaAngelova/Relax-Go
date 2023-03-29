import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Trip } from '../models/trip.model';
import { TRIP } from '../mocks/trip.mock';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor() { }

getTrip(): Observable<Trip[]> {
  return of (TRIP);

}

}