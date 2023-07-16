import { Component, Input } from '@angular/core';
import { GeorideAPITrip } from "src/app/models/GeorideAPI/GeorideAPI.type";

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
})
export class TripsListComponent {

  @Input() trips: GeorideAPITrip[] = [];
}
