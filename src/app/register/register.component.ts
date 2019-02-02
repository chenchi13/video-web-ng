import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loading = false;
  returnUrl: string;

  model = new User('', '', '')

  constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {}


  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    this.authenticationService.register(this.model)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
             });
  }
}
