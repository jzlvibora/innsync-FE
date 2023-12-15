import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/shared/room';
import { RoomType } from 'src/app/shared/roomtypes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomtypeService {
  BASE_URL = environment.apiUrl;

  constructor(private http:HttpClient) { }

 
  public getAllRoomTypes():Observable<RoomType[]>{
    return this.http.get<RoomType[]>(
      this.BASE_URL + 'roomtypes'
    )
  }

}
