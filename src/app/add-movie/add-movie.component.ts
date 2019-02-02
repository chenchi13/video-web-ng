import { Component, OnInit } from '@angular/core';
import { Movie }    from '../movie';
import { DataService } from '../data.service'
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private route: ActivatedRoute) { }

  genres : any;
  directors : any;
  
  ngOnInit() {
    this.data.getGeneres().subscribe(data => this.genres = data);
    this.data.getDirectors().subscribe(data => this.directors = data);

    this.route.params.subscribe( params => 
      this.data.getMovie(params.id).subscribe(
        data => this.model = data as Movie) 
    );
  }

  model = new Movie('', null, null, null );
  
  onSubmit() {
    if (this.model.idMovie != null) {
      this.data.updateMovie(this.model).subscribe(response => this.router.navigate(['/movies']));
    }
    else{
      this.data.addMovie(this.model).subscribe(response => this.router.navigate(['/movies']));
    }
  }
  
  get diagnostic() { return JSON.stringify(this.model); }

}
