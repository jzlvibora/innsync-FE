import { Injectable } from '@angular/core';
import { BookingDetails } from 'src/app/shared/booking-details';

@Injectable({
  providedIn: 'root'
})
export class BookingDataService {
  bookingDetails!:BookingDetails;
  

  constructor() { }

  setBookingDetails(data:any){
    this.bookingDetails = data;
  }

  getBookingDetails(){
    return this.bookingDetails

  }
}
