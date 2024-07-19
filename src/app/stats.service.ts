import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private apiUrl = 'http://your-spring-boot-api-url/stats'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getStats(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}