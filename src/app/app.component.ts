import { Component, OnInit } from '@angular/core';
import { GeorideAPIService } from "./services/georide-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Georide-Trips';

  constructor() { }
}
