import { Component } from '@angular/core';
import { GeorideAPITrip } from "./models/GeorideAPI/GeorideAPI.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Georide-Trips';
  trips: GeorideAPITrip[] = [];

  constructor() {
  }
}