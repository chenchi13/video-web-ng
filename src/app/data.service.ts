import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Movie } from './movie'
import { Customer } from './customer'
import { Rent } from './rent';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'No Auth'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getCustomers() {
    return this.http.get('http://localhost:52804/api/customers')
  }

  getCustomer(userId){
    return this.http.get('http://localhost:52804/api/customers/' + userId)
  }

  addCustomer(customer: Customer){
    return this.http.post('http://localhost:52804/api/customers', customer, httpOptions)
  }

  updateCustomer(user: Customer){
    return this.http.put('http://localhost:52804/api/customers/' + user.idCustomer, user, httpOptions)
  }

  deleteCustomer(userId){
    return this.http.delete('http://localhost:52804/api/customers/' + userId)
  }

  getMovies(){
    return this.http.get('http://localhost:52804/api/movies')
  }

  getMovie(movieId){
    return this.http.get('http://localhost:52804/api/movies/' + movieId)
  }

  addMovie(movie: Movie){
    return this.http.post('http://localhost:52804/api/movies', movie, httpOptions)
  }

  updateMovie(movie: Movie){
    return this.http.put('http://localhost:52804/api/movies/' + movie.idMovie, movie, httpOptions)
  }

  deleteMovie(idMovie){
    return this.http.delete('http://localhost:52804/api/movies/' + idMovie)
  }

  getGeneres(){
    return this.http.get('http://localhost:52804/api/genres')
  }

  getDirectors(){
    return this.http.get('http://localhost:52804/api/directors')
  }

  getRent(idRent){
    return this.http.get('http://localhost:52804/api/rents/' + idRent)
  }

  addRent(rent: Rent){
    return this.http.post('http://localhost:52804/api/rents', rent, httpOptions)
  }

  updateRent(rent: Rent){
    return this.http.put('http://localhost:52804/api/rents/' + rent.idRent, rent, httpOptions)
  }

  deleteRent(idRent){
    return this.http.delete('http://localhost:52804/api/rents/' + idRent)
  }

}
