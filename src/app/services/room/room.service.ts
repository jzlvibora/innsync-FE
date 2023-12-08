import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from 'src/app/shared/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  BASE_URL = environment.apiUrl + 'rooms';

  constructor(private http:HttpClient) { }
  
  public getAllRooms():Observable<Room[]>{
    return this.http.get<Room[]>(
      this.BASE_URL
    )
  }
}
