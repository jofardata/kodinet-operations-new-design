import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  // procedureUrl = 'https://proceduresfiscales.herokuapp.com';
  bdnUrl= 'https://kodinet-bdn.herokuapp.com/';
  kodinet = 'https://kodinet-operations.herokuapp.com';
  
  constructor() { }
}
