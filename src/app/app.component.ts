import { Component, OnInit } from '@angular/core';
import { GeorideAPIService } from "./services/georide-api.service";
import { GeorideAPITrip } from "./models/GeorideAPI/GeorideAPI.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Georide-Trips';
  trips: GeorideAPITrip[] = [];

  constructor() {
    this.trips.push({
      id: 1,
      trackerId: 1,
      averageSpeed: 67,
      distance: 12,
      duration: 3,
      startAddress: "Cesson-Sévigné",
      niceStartAddress: "Cesson-Sévigné",
      startLat: 1,
      startLon: 1,
      endAddress: "",
      niceEndAddress: "Rennes",
      endLat: 1,
      endLon: 1,
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 1000 * 60 * 21),
      staticImage: "https://georide.fr/wp-content/uploads/2022/11/3-%E2%80%93-2@2x@2x.png",
    });
    this.trips.push({
      id: 1,
      trackerId: 1,
      averageSpeed: 67,
      distance: 12,
      duration: 3,
      startAddress: "Cesson-Sévigné",
      niceStartAddress: "Cesson-Sévigné",
      startLat: 1,
      startLon: 1,
      endAddress: "",
      niceEndAddress: "Rennes",
      endLat: 1,
      endLon: 1,
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 1000 * 60 * 21),
      staticImage: "https://georide.fr/wp-content/uploads/2022/11/3-%E2%80%93-2@2x@2x.png",
    });
    this.trips.push({
      id: 1,
      trackerId: 1,
      averageSpeed: 67,
      distance: 12,
      duration: 3,
      startAddress: "Cesson-Sévigné",
      niceStartAddress: "Cesson-Sévigné",
      startLat: 1,
      startLon: 1,
      endAddress: "",
      niceEndAddress: "Rennes",
      endLat: 1,
      endLon: 1,
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 1000 * 60 * 21),
      staticImage: "https://georide.fr/wp-content/uploads/2022/11/3-%E2%80%93-2@2x@2x.png",
    });
  }
}
