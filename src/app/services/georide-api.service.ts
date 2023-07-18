import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { GeorideAPIAuthToken, GeorideAPITrip } from "../models/GeorideAPI/GeorideAPI.type";
import fakeTrips from '../fakeAPIData/fakeTrips.json';

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

  getAuthToken(): Observable<GeorideAPIAuthToken> {
    const body = {
      "email": "your-email",
      "password": "your-password",
    }

    return this.http.post<GeorideAPIAuthToken>('https://api.georide.com/user/login', body);
  }

  getTrips(from: Date, to: Date, trackerId: number = this.trackerId): Observable<GeorideAPITrip[]> {
    const headers = { 'Authorization': `Bearer ${this.authToken}` }
    const url = `https://api.georide.fr/tracker/${trackerId}/trips?from=${from.toISOString()}&to=${to.toISOString()}`;

    if (environment.useFakeData) {
      return new Observable((subscriber) => {
        subscriber.next(fakeTrips);
        subscriber.complete();
      });
    }
    return this.http.get<GeorideAPITrip[]>(url, { headers });
  }
}
