import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;
  returnUrl: string;

  model = new User('', '')

  constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {}

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
      this.authenticationService.login(this.model)
          .subscribe(
              data => {
                if(data.username){
                  this.authenticationService.setToken(data.username);
                  this.router.navigate([this.returnUrl]);
                }
               });
  }
}

