import { Component, Input, OnInit } from '@angular/core';
import { GeorideAPITrip } from "src/app/models/GeorideAPI/GeorideAPI.type";
import { GeorideAPIService } from "src/app/services/georide-api.service";

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
})
export class TripsListComponent implements OnInit {

  trips: GeorideAPITrip[] = [];
  fromDate: Date = new Date();
  toDate: Date = new Date();
  loading: boolean = true;
  errorMessage: string | null = null;

  constructor(private GeorideApiService: GeorideAPIService) {
    this.fromDate.setDate(this.toDate.getDate() - 7); // 1 week interval
  }

  ngOnInit(): void {
    this.GeorideApiService.getTrips(this.fromDate, this.toDate).subscribe(
      {
        next: trips => {
          this.trips = trips;
        },
        error: error => {
          console.log(error);
          this.errorMessage = "An error happened while fetching trips.";
        },
        complete: () => {
          this.loading = false;
        }
      }
    );
  }
}
