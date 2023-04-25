import { Component, OnInit } from '@angular/core';
import {User} from "../models";
import {ApiService} from "../api.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  messages = {emptyMessage: 'empty', totalMessage: 'Total'};
  isLoading = false;
  page = 0;

  constructor(private api: ApiService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    this.api.getUsers(this.page).subscribe((res: User[]) => {
      this.users = res;
      this.isLoading = false;
    });
  }

}
