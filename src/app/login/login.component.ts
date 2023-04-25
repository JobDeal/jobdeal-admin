import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {Admin, Login} from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = null;

  constructor(private api: ApiService, private router: Router,
              public snackBar: MatSnackBar) {

    const login = JSON.parse(localStorage.getItem('jobdealAdmin'));

    console.log(login);

    if (login) {
      this.login = login;
    }
  }

  ngOnInit() {
    if (localStorage.getItem('jobdealAdmin')) {
      this.router.navigate(['/main/users']);
    }
  }

  onLogin(username, password, blur) {
    blur.focus();
    this.api.login(username, password).subscribe(
      (login: Login) => {
        if (login ) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          console.log(login);
          localStorage.setItem('jobdealAdmin', JSON.stringify(login));
          this.login = login;
          this.router.navigate(['/main/users']);
        }

      }, (error) => {
        localStorage.removeItem('jobdealAdmin');
        const err = error.json();
        this.snackBar.open(err.message, null, { duration: 2000 });
      });
  }

}
