import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Room } from '../shared/room';
import { RoomService } from '../services/room/room.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit{
  checkInDate!: string;
  checkOutDate!:string;
  rooms!: Room[];

  constructor(private route:ActivatedRoute, private roomService:RoomService,private router:Router){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      this.checkInDate=params['check_in_date'];
      this.checkOutDate=params['check_in_date'];
    })

    this.roomService.getAvailableRooms(this.checkInDate,this.checkOutDate).subscribe((res)=>{
      this.rooms=res;
    })
  }

  onSelectRoom(roomId:number){
    this.router.navigate(['bookingconfirmation/'],
    {
      queryParams:{
        id:roomId,
        checkInDate: this.checkInDate,
        checkOutDate:this.checkOutDate
      }
    },
    )
  }
  

}
