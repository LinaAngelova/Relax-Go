import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TripsComponent } from './components/trips/trips.component';
// import { TripListComponent } from './components/trip-list/trip-list.component';
// import { DetailComponent } from './components/trips/detail/detail.component';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'home', component: HomeComponent},
  // {path: 'viaggi', component: TripsComponent, children: [
  //   {path: 'dettaglio/:title/:_id', component: DetailComponent},
  //   {path: '', pathMatch: 'full', component: TripListComponent}
  // ]},
  // {path: '**', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
