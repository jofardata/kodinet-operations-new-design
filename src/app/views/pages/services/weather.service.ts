import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ApiResponse } from './api-response';
// import 'rxjs/add/operation/map' ;
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import {UrlService} from '../services/url.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient,
    private urlService:UrlService) { }

  // recuperation de toutes les statistiques 
  public getStats()
  {
    let api = this.urlService.bdnUrl+ '/stats/findAll';
    return this.http.get(api)
    .map( res => res);
  }
}
