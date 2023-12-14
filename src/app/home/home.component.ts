import { Component, OnInit } from '@angular/core';
import { Room } from '../shared/room';
import { RoomService } from '../services/room/room.service';
import { NavigationExtras, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { RoomtypeService } from '../services/roomtype/roomtype.service';
import { RoomType } from '../shared/roomtypes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  rooms!:Room[];
  roomTypes!:RoomType[];
  constructor(private roomService:RoomService, private roomTypeService:RoomtypeService, private router:Router, private datePipe:DatePipe){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.roomTypeService.getAllRoomTypes().subscribe((res)=>{
      this.roomTypes=res;
    });
  }

  navigateToSearchResults(checkInDate:string, checkOutDate:string){
    this.router.navigate(['/search-results'],
    {
      queryParams:{
        check_in_date:this.datePipe.transform(new Date(checkInDate), 'yyyy-MM-dd'),
        check_out_date:this.datePipe.transform(new Date(checkOutDate), 'yyyy-MM-dd')
      }
    },
    
    )

  }

}
