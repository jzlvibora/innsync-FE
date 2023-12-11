import { Component, OnInit } from '@angular/core';
import { BookingDataService } from '../services/booking-data/booking-data.service';
import { BookingDetails } from '../shared/booking-details';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservationService } from '../services/reservation/reservation.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit{
  bookingDetails!:BookingDetails;
  form!:FormGroup

  constructor(private bookingDataService:BookingDataService, private reservationService:ReservationService){}

  ngOnInit(): void {
    this.bookingDetails = this.bookingDataService.bookingDetails;
    this.form = this.buildForm();
  }

  private buildForm():FormGroup{
    return new FormGroup({
      cardNum: new FormControl(null,[Validators.required]),
      expiryDate: new FormControl(null,[Validators.required]),
      cvc:new FormControl(null,[Validators.required]),
    })
  }


  onPlaceOrder(){
    const form = this.form.controls;
    const data:any = {
      guest:form['cardNum'].value,
      email:form['expiryDate'].value,
      phone:form['cvc'].value
    }

    this.reservationService.reserveRoom().subscribe((res)=>{
      console.log(res)
    })
}
}
