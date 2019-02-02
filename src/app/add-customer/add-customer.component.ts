import { Component, OnInit } from '@angular/core';
import { Customer }    from '../customer';
import { DataService } from '../data.service'
import {Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe( params => 
      this.data.getCustomer(params.id).subscribe(
        data => this.model = data as Customer) 
    );
  }

  model = new Customer('', '');
  
  onSubmit() {
    console.log("Customer: " + this.model); // todo remove
    if(this.model.idCustomer != null){
      this.data.updateCustomer(this.model).subscribe(response =>
        this.router.navigate(['/'])
      );
    }
    else{
      this.data.addCustomer(this.model).subscribe(response =>
        this.router.navigate(['/'])
      );
    }
  }

}
