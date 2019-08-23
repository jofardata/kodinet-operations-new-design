import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {UrlService} from '../services/url.service';
import { Url } from 'url';

@Injectable({
  providedIn: 'root'
})
export class BoardingService {

  constructor(private http: HttpClient,
    private urlService:UrlService) { }

//fucntion qui recupere le lien du back-end airports
  public getAllBoarding(){
    return this.http.get<any>(this.urlService.kodinet+ "/embarkements/find-all",{observe:'response'})
   }
   public getPagedData(page, size){
    return this.http.get<any>(this.urlService.bdnUrl+ "embarkements/pages?page="+page+"&size="+size,{observe:'response'}) 
   }
   public getPagedDataBetweenDates(page, size, date1, date2){
    return this.http.get<any>(this.urlService.bdnUrl+ "embarkements/pages/dates?page="
    +page+"&size="+size+"&date1="+date1+"&date2="+date2,{observe:'response'}) 
   }
}