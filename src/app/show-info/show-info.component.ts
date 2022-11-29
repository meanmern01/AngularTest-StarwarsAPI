import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})

export class ShowInfoComponent implements OnInit {
  filmsData: any = [];
  peoplesData: any = [];
  planetsData: any = [];
  speciesData: any = [];
  starshipData: any = [];
  vehiclesData: any = [];
  keyword: any = ''
  isLoading: boolean = false;

  constructor(private data: DataService, private http: HttpClient, private router: Router) { }
  active = 1;

  ngOnInit(): void {
    this.getCetegories()
    this.getFilms()
    this.getPeoples()
    this.getPlanets()
    this.getSpecies()
    this.getStartShips()
    this.getVehicles()
  }
  getCetegories() {
    this.data.getCategories().subscribe((d: any) => {
      console.log(d);
    })
  }
  getFilms() {
    this.data.getFilms().subscribe((film: any) => {
      this.filmsData = film;
      console.log(film)
    })
  }
  getPeoples() {
    this.data.getPeoples().subscribe((people: any) => {
      this.peoplesData = people;
      console.log("people", people)
    })
  }
  getPlanets() {
    this.data.getPlanets().subscribe((planet: any) => {
      console.log("dsdg", planet)
      this.planetsData = planet
    });
  }
  getSpecies() {
    this.data.getSpecies().subscribe((specie: any) => {
      console.log(specie, "------")
      this.speciesData = specie
    })
  }
  getStartShips() {
    this.data.getStarships().subscribe((starShip: any) => {
      console.log(starShip, "Starship")
      this.starshipData = starShip
    })
  }
  getVehicles() {
    this.data.getVehicles().subscribe((vehicle: any) => {
      console.log(vehicle, "vehicle")
      this.vehiclesData = vehicle
    })
  }

  navigatePeople(url: any) {
    this.data.getUrlCall(url).subscribe((people: any) => {
      console.log(people, "people");

      this.peoplesData = people
    })
  }
  navigatePlanet(url: any) {
    this.data.getUrlCall(url).subscribe((planet: any) => {
      this.planetsData = planet
    })
  }
  navigateStarship(url: any) {
    this.data.getUrlCall(url).subscribe((starship: any) => {
      this.starshipData = starship
    })
  }
  getKeyWord() {
    return localStorage.getItem('keyword')
  }
  trackIndex(index: number) {
    return index
  }
  goToDetails(name: any, category: any) {
    console.log("name: ", name)
    this.router.navigate(['/show-details'], { queryParams: { name, category } })
  }
}
