import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies$: Object;
  currentUrl: string;

  constructor(private data: DataService, private router: Router) { 

  }

  deleteMovie(idMovie){
    this.data.deleteMovie(idMovie).subscribe(response => window.location.reload())
  }

  ngOnInit() {
    this.data.getMovies().subscribe(
      data => this.movies$ = data 
    );
  }

}
