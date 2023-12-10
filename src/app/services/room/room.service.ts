import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from 'src/app/shared/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  BASE_URL = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public getRoom(id:number):Observable<Room>{
    const params = {
      id:id
    }
    return this.http.get<Room>(
      this.BASE_URL + 'rooms/' + id,
      // {params}
    )
  }
  
  public getAllRooms():Observable<Room[]>{
    return this.http.get<Room[]>(
      this.BASE_URL + 'rooms/ourRooms'
    )
  }

  public getAvailableRooms(checkInDate:string,checkOutDate:string): Observable<Room[]>{
    const params = {
      checkInDate : checkInDate,
      checkoutDate: checkOutDate
    }
    return this.http.get<Room[]>(
      this.BASE_URL + 'rooms/availableRooms',
      {params}
    )
  }
}
