import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/shared/room';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  BASE_URL = environment.apiUrl;

  constructor(private http:HttpClient) { }

  data = {
    "roomId":2,
    "checkInDate":"2026-01-01",
    "checkOutDate":"2026-01-03",
    "username":"testuser2"
}


  public reserveRoom():Observable<Room>{
    return this.http.post<any>(
      this.BASE_URL + 'reservations/' + 'new',
      this.data
    )
  }
}
