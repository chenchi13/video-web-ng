import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Rent } from '../rent'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-rent',
  templateUrl: './add-rent.component.html',
  styleUrls: ['./add-rent.component.scss']
})
export class AddRentComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private route: ActivatedRoute) { }

  movies: any;

  today = new Date();

  model = new Rent(null, this.today.toLocaleDateString("en-US"), '', null)

  ngOnInit() {
    this.data.getMovies().subscribe(data => this.movies = data);

    this.route.params.subscribe( params => 
      this.model.customerId = params.idCustomer
    );

    this.route.params.subscribe( params => 
      this.data.getRent(params.idRent).subscribe(
        data => this.model = data as Rent) 
    );
  }

  onSubmit() {
    //console.log("Model = " + this.model);
    if (this.model.idRent != null) {
      this.data.updateRent(this.model).subscribe(response => this.router.navigate(['/details/' + this.model.customerId]));
    }
    else{
      this.data.addRent(this.model).subscribe(response => this.router.navigate(['/details/' + this.model.customerId]));
    }
  }

}
