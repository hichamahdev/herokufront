import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carte } from './carte';

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  private baseURL = "http://localhost:8081/api/auth/carte";
  private baseURLs = "http://localhost:8081/api/auth/carte/slot";

  constructor(private httpclient:HttpClient) { }


  getCarteList(): Observable<Carte[]> {
    return this.httpclient.get<Carte[]>(`${this.baseURL}`,);
  }
  getCartewithoutSlotList(): Observable<Carte[]> {
    return this.httpclient.get<Carte[]>(`${this.baseURLs}`,);
  }

 


  createCarte(carte: Carte): Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`, carte);
  }

  getCartetById(id:number): Observable<Carte>{
    return this.httpclient.get<Carte>(`${this.baseURL}/${id}`);
  }

  
  updateCarte(id: number , carte: Carte):Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, carte);
  }

  deleteCarte(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }

}
