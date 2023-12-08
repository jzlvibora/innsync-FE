import { Component, OnInit } from '@angular/core';
import { Room } from '../shared/room';
import { RoomService } from '../services/room/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  room!:Room[];
  constructor(private roomService:RoomService){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.roomService.getAllRooms().subscribe((res)=>{
      console.log(res)
    });
  }

}
