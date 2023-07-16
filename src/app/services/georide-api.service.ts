import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { GeorideAPITrip } from "../models/GeorideAPI/GeorideAPI.type";

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

  getTrips(from: Date, to: Date, trackerId: number = this.trackerId): Observable<GeorideAPITrip[]> {
    const headers = { 'Authorization': `Bearer ${this.authToken}` }
    const url = `https://api.georide.fr/tracker/${trackerId}/trips?from=${from.toISOString()}&to=${to.toISOString()}`;
    
    return this.http.get<GeorideAPITrip[]>(url, { headers });
  }
}
