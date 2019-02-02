import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) { 
  }

  ngOnInit() {
    this.route.params.subscribe( params => 
      this.user$ = this.data.getCustomer(params.id).subscribe(
        data => this.user$ = data ) 
    );
  }

  deleteRent(idRent){
    this.data.deleteRent(idRent).subscribe(response => window.location.reload())
  }

}
