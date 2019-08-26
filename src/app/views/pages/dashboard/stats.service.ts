import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../services/api-response';
import {UrlService} from '../services/url.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http:HttpClient,
    private urlService:UrlService ) { }


  getAllStats(){
    return this.http.get<ApiResponse>("https://kodinet.herokuapp.com/stats/findAll", {observe:'response'})
  }

  public dataOrdonnancee(){
    return this.http.get<any>(this.urlService.url + "/notes/chart-ordonnancees/"+localStorage.getItem('entityId'),{observe:'response'});
  }
}
