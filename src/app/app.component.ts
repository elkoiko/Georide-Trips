import { Component, OnInit } from '@angular/core';
import { GeorideAPIService } from "./services/georide-api.service";
import { GeorideAPITrip } from "./models/GeorideAPI/GeorideAPI.type";
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Georide-Trips';
  trips: GeorideAPITrip[] = [];

  constructor(private GeorideApiService: GeorideAPIService) {
  }

  ngOnInit(): void {
    this.GeorideApiService.getTrips(new Date('2021-01-01'), new Date('2021-01-02')).subscribe((trips) => {
      this.trips = trips;
    });
  }
}