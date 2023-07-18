import { Component, Input, OnInit } from '@angular/core';
import { GeorideAPITrip } from "src/app/models/GeorideAPI/GeorideAPI.type";
import { GeorideAPIService } from "src/app/services/georide-api.service";

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
})
export class TripsListComponent implements OnInit {

  trips: GeorideAPITrip[] = [];

  constructor(private GeorideApiService: GeorideAPIService) {
  }

  ngOnInit(): void {
    this.GeorideApiService.getTrips(new Date('2021-01-01'), new Date('2021-01-02')).subscribe((trips) => {
      this.trips = trips;
    });
  }
}
