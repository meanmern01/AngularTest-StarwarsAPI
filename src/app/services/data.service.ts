import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }
  getCategories() {
    return this.http.get("https://swapi.dev/api/")
  }
  getFilms() {
    return this.http.get("https://swapi.dev/api/films/")
  }
  getPeoples() {
    return this.http.get("https://swapi.dev/api/people/")
  }
  getUrlCall(url: any) {
    return this.http.get(url)
  }
  getPlanets() {
    return this.http.get("https://swapi.dev/api/planets/")
  }
  getSpecies() {
    return this.http.get("https://swapi.dev/api/species/")
  }
  getStarships() {
    return this.http.get("https://swapi.dev/api/starships/")
  }
  getVehicles() {
    return this.http.get("https://swapi.dev/api/vehicles/")
  }
}
