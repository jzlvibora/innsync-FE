import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from '../shared/room';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { RoomService } from '../services/room/room.service';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.scss']
})
export class BookingConfirmationComponent implements OnInit{
  form!:FormGroup;
  room!:Room;
  roomId!:number;
  checkInDate!:string;
  checkOutDate!:string;
  error!:string | null;
  isLoading!:boolean 

  constructor(private route:ActivatedRoute, private roomService:RoomService){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      this.roomId=params['id'];
      this.checkInDate=params['checkInDate'];
      this.checkOutDate=params['checkOutDate'];
    })
    this.getRoomDetails();
  }


  getRoomDetails(){
    this.roomService.getRoom(this.roomId).subscribe((res)=>{
      this.room = res;
      this.form = this.buildForm();
      console.log(res)
    })

  }

  private buildForm():FormGroup{
    return new FormGroup({
      roomNumber: new FormControl({value: this.room?.roomNumber, disabled: true} ),
      checkinDate: new FormControl({value:this.checkInDate, disabled:true}),
      checkoutDate: new FormControl({value:this.checkOutDate, disabled:true}),
      price: new FormControl({value:this.room?.price, disabled:true}),
      email: new FormControl(null,[Validators.required]),
      phone:new FormControl(null,[Validators.required]),
      notes: new FormControl(null, [Validators.required])
    })
  }


  onContinue(){
    console.log('continue')
  }


}
