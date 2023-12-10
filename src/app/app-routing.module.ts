import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search-results', component:SearchResultsComponent},
  {path:'bookingconfirmation', component:BookingConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
