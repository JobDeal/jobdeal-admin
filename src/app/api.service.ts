import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_API_URL = 'http://jobdeal.justraspberry.com/api';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  //ADMIN
  login(email: string, password: string) {
    return this.http.post(this.BASE_API_URL + '/panel/admin/login',
      JSON.stringify({ email: email, password: password }), {headers : this.authHeaders()});
  }

  logout() {
    localStorage.removeItem('jobdealAdmin');
  }

  //USERS
  getUsers(page: number) {
    return this.http.get(this.BASE_API_URL + '/panel/user/get/' + page, {headers : this.authHeaders()});
  }

  private authHeaders() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('jobdealAdmin'));
    if (currentUser) {
      return new HttpHeaders({ 'Authorization': currentUser.jwt , 'Content-Type': 'application/json'});
    }
  }
}
