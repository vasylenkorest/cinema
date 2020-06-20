import { Component } from '@angular/core';
import { strict } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  search: string = 'Batman';
  myFilm: Array<any>;
  Search() {
    const searchStr = this.search;
    this.getFilm('s', searchStr);
  }

  async getFilm(param: string, searchStr: string) {
    const response = await fetch(
      `http://www.omdbapi.com/?${param}=${searchStr}&apikey=b4b88c1`
    );
    if (response.ok) {
      const data = await response.json();
      let dS = data.Search;
      this.myFilm = dS;
      console.log(this.myFilm);
    }
  }
  films = [
    { name: 'FILM1' },
    { name: 'FILM2' },
    { name: 'FILM3' },
    { name: 'FILM4' },
    { name: 'FILM5' },
  ];
}
