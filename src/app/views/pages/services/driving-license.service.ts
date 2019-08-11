import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from '../services/url.service';
@Injectable({
  providedIn: 'root'
})
export class DrivingLicenseService {
  constructor(private http: HttpClient,
    private urlService:UrlService) { }

  public getAllDriving(){
    return this.http.get<any>(this.urlService.bdnUrl+ "/drivinglicenses/findAll",{observe:'response'}) 
   }
  
   public getPagedData(page, size){
    return this.http.get<any>(this.urlService.bdnUrl+ "/drivinglicenses/pages?page="+page+"&size="+size,{observe:'response'}) 
   }
   public getPagedDataBetweenDates(page, size, date1, date2){
    return this.http.get<any>(this.urlService.bdnUrl+ "/drivinglicenses/pages/dates?page="
    +page+"&size="+size+"&date1="+date1+"&date2="+date2,{observe:'response'}) 
   }
  }
  