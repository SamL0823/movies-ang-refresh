import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  @Input() movies: Movie[];
  @Input() name: string;

  newTitle: string;
  newCategory: string;
  newYear: number;
  

  constructor() { 

  }

  ngOnInit() {
  }

  details(movie: Movie) {
    alert(`details for ${movie.title}`);
  }

  addMovie(title: string, category: string, year: number){
    let movie: Movie = new Movie(this.newTitle, this.newCategory, this.newYear);
    this.movies.push(movie);
  }

}
