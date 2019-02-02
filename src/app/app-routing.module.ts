import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { DetailsComponent } from './details/details.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddRentComponent } from './add-rent/add-rent.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NeedAuthGuard } from './auth.guard';

const routes: Routes = [{
  path: '',
  component: CustomersComponent,
  canActivate: [NeedAuthGuard]
},
{
  path: 'details/:id',
  component: DetailsComponent,
  canActivate: [NeedAuthGuard]
},
{
  path: 'movies',
  component: MoviesComponent,
  canActivate: [NeedAuthGuard]
},
{
  path: 'addmovie',
  component: AddMovieComponent,
  canActivate: [NeedAuthGuard]
},
{
  path: 'addmovie/:id',
  component: AddMovieComponent,
  canActivate: [NeedAuthGuard]
},
{
  path: 'addcustomer',
  component: AddCustomerComponent,
  canActivate: [NeedAuthGuard]
},
{
  path: 'addcustomer/:id',
  component: AddCustomerComponent,
  canActivate: [NeedAuthGuard]
},
{
  path: 'addrent/:idCustomer',
  component: AddRentComponent,
  canActivate: [NeedAuthGuard]
},
{
  path: 'addrent/:idCustomer/:idRent',
  component: AddRentComponent,
  canActivate: [NeedAuthGuard]
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
