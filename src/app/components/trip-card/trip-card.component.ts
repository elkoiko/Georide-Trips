import { Component, Input } from '@angular/core';
import { GeorideAPITrip } from "src/app/models/GeorideAPI/GeorideAPI.type";

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
})
export class TripCardComponent {

  @Input() trip: GeorideAPITrip = <GeorideAPITrip>{};
}
