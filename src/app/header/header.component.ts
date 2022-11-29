import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  LatestSearch: any[] = new Array(4);
  newSearch: any = ''

  constructor() { }

  ngOnInit(): void {
    this.LatestSearch = JSON.parse(localStorage.getItem('search') || '')
    localStorage.removeItem('keyword')
  }

  addSearch($event: any) {
    this.newSearch = $event.value;
    console.log(this.newSearch);

    localStorage.setItem('keyword', this.newSearch)

    console.log(this.LatestSearch)

    return false
  }
  handleSubmit($event: any) {
    console.log($event.target.search.value);
    this.LatestSearch.push(this.newSearch)
    this.LatestSearch.shift()
    localStorage.removeItem('keyword')

    localStorage.setItem("search", JSON.stringify(this.LatestSearch));
    this.newSearch = '';
  }

  searchTags(val: any) {
    localStorage.setItem('keyword', val)

  }
  reset($event: any) {
    $event.stopPropagation()
    localStorage.removeItem('keyword')
  }
  checkLogic() {
    if (localStorage.getItem('keyword')) {
      return false
    }
    return true
  }

}
