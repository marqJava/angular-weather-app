import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs/internal/Observable';
import * as mockData from './mock.weather.data.json';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string) : Observable<WeatherData> {
    
    /*
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostHeaderValue
        )
        .set(
          environment.XRapidAPIKeyHeaderName,
          environment.XRapidAPIKeyHeaderValue
        ),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json'),
    });
    */
    const fakeData = (mockData as WeatherData);

    return of(fakeData);    
  }
}