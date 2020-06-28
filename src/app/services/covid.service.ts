import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor( private http: HttpClient) { }

  getData() {
    return this.http.get(`https://www.datos.gov.co/resource/gt2j-8ykr.json?ciudad_de_ubicaci_n=Suan`);
  }

}
