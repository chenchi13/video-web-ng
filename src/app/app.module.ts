import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomersComponent } from './customers/customers.component';
import { DetailsComponent } from './details/details.component';
import { MoviesComponent } from './movies/movies.component'
import { AddMovieComponent } from './add-movie/add-movie.component';

import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddRentComponent } from './add-rent/add-rent.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NeedAuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CustomersComponent,
    DetailsComponent,
    MoviesComponent,
    AddMovieComponent,
    AddCustomerComponent,
    AddRentComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
