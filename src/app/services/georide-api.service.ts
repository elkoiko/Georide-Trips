import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GeorideAPIService {
  authToken: string | null = null;
  trackerId: number = 0;

  constructor(private http: HttpClient) {
    this.authToken = environment.authToken;
    this.trackerId = environment.trackerId;
  }

}
