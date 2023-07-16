import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GeorideAPIService {
  authToken: string | null = null;

  constructor(private http: HttpClient) {
    this.initAuthToken();
  }

  private initAuthToken(): void {
    this.authToken = environment.authToken;
  }
}
