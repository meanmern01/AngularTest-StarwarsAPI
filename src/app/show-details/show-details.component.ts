import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  check: any = '';
  compiledData: any = '';
  person: boolean = false;
  starShip: boolean = false;
  inProgress: boolean = false;
  category: any = '';
  constructor(private router: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((res: any) => {
      console.log("res: ", res);
      this.category = res.category
      this.check = res.name;
      if (res.category == 'people') {
        this.person = true;
        this.getPeople()
      }
      else if (res.category == 'starship') {
        this.starShip = true
        this.getStarShip()
      } else {
        this.inProgress = true

      }
      console.log("interactive", this.inProgress);
    })

  }
  getPeople() {
    this.data.getPeoples().subscribe((people: any) => {
      console.log("film: ", people.results);
      const fData = people.results.filter((f: any) => f.name === this.check)
      this.compiledData = fData
      console.log(this.compiledData, "--------------");
    })
  }
  getStarShip() {
    this.data.getStarships().subscribe((starShip: any) => {
      console.log("film: ", starShip.results);
      const fData = starShip.results.filter((f: any) => f.name === this.check)
      this.compiledData = fData
      console.log(this.compiledData, "--------------");
    })
  }
}
