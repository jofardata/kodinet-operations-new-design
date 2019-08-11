import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from '../services/url.service';
@Injectable({
  providedIn: 'root'
})
export class ResertPasswordService {

  
  constructor(private http: HttpClient,
    private urlService:UrlService) { }
  public Enregistrement(data){
    //retour de la requete
   return this.http.post<any>(this.urlService.kodinet + "/users/change-password/" +data.telephone,data,{observe:'response'});
  }
}
