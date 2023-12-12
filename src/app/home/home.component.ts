import { Component, OnInit } from '@angular/core';
import { Room } from '../shared/room';
import { RoomService } from '../services/room/room.service';
import { NavigationExtras, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  rooms!:Room[];
  constructor(private roomService:RoomService, private router:Router, private datePipe:DatePipe){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.roomService.getAllRooms().subscribe((res)=>{
      this.rooms=res;
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
