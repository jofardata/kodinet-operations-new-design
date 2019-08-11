import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from '../services/url.service';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http:HttpClient,
    private urlService:UrlService) { }

  public chargerRecherche(data){
    //retour de la requete
   return this.http.get<any>(this.urlService.bdnUrl+ "/persons/read-by-input/"+data,{observe:'response'});
  }

  // recuperer toutes les entites
  public getAllEntites(){
    //retour de la requete
    return this.http.get<any>(this.urlService.bdnUrl+ "/fiscalentity/find-all",{observe:'response'});
  }

// recuperation de secteur
  public getAllSector(){
    //retour de la requete
    return this.http.get<any>(this.urlService.bdnUrl+ "/sector/read-all",{observe:'response'});
  }

  // recuperer tous les roles
  public getAllRoless(){
    //retour de la requete
    return this.http.get<any>(this.urlService.kodinet+ "/user-role/read-all",{observe:'response'});
  }

  //creation user
  public Enregistrement(data){
    //retour de la requete
   return this.http.post<any>(this.urlService.kodinet+ "/users/insert/" +data.roleId+"/"+data.telephone,data,{observe:'response'});
  }
  public createUser(agent) {
    return this.http.post<any>(this.urlService.bdnUrl+ "/agents/create/"+178+"/"+agent.entityId,agent,{observe:'response'});
  }
  
}
