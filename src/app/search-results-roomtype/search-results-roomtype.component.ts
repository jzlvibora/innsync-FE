import { Component, OnInit } from '@angular/core';
import { Room } from '../shared/room';
import { RoomtypeService } from '../services/roomtype/roomtype.service';
import { ActivatedRoute, Route } from '@angular/router';
import { RoomService } from '../services/room/room.service';

@Component({
  selector: 'app-search-results-roomtype',
  templateUrl: './search-results-roomtype.component.html',
  styleUrls: ['./search-results-roomtype.component.scss']
})
export class SearchResultsRoomtypeComponent implements OnInit{
  rooms!: Room[];
  roomType!:string

  constructor(private roomTypeService:RoomtypeService , private route:ActivatedRoute, private roomService:RoomService){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
     this.roomType = params['roomType']
    })

    this.roomService.getRoomsByType(this.roomType).subscribe((res)=>{
      this.rooms=res;
    })
  }
 


}
