import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.scss'],
})
export class CardFilmComponent {
  @Input() film;
}
