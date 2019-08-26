import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  // procedureUrl = 'https://proceduresfiscales.herokuapp.com';
  // bdnUrl= 'https://kodinet-bdn.herokuapp.com/';
  bdnUrl= 'https://kodinet.herokuapp.com/';
  // kodinet = 'https://kodinet-operations.herokuapp.com';
  kodinet='https://operationsbackend.herokuapp.com';
  url = 'https://proceduresfiscales.herokuapp.com';
  // bdnUrltest= 'https://kodinet.herokuapp.com';
  
  constructor() { }
}
