import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from '../services/url.service';

@Injectable({
  providedIn: 'root'
})
export class VignetteService {

  constructor(private http: HttpClient,
    private urlService:UrlService) { }

  // function of recuperation de toutes les vignettes 
  public getAllVignette(){
    return this.http.get<any>(this.urlService.bdnUrl+ "/vignettes/findAll",{observe:'response'})
   }

  // fucntion of  pagination 
   public getPagedData(page, size){
    return this.http.get<any>(this.urlService.bdnUrl+ "/vignettes/pages?page="+page+"&size="+size,{observe:'response'}) 
   }

  //  function of recuperation des vignettes avec pagination 
   public getPagedDataBetweenDates(page, size, date1, date2){
    return this.http.get<any>(this.urlService.bdnUrl+ "/vignettes/pages/dates?page="
    +page+"&size="+size+"&date1="+date1+"&date2="+date2,{observe:'response'}) 
   }

  }