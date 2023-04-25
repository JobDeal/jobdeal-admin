import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {Admin} from '../models';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('navbarToggler') navbarToggler: ElementRef;
  @ViewChild('sideNav') navbar: MatSidenav;

  address;
  user: Admin;

  constructor(private router: Router, private api: ApiService) {

  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('jobdealAdmin')).user;
   /* this.service.checkAdmin().subscribe((res) => {
      console.log('OK');
    }, (err) => {
      this.service.logout();
      this.router.navigate(['/']);
    });*/
  }

  toggle($event) {
    this.navbarToggler.nativeElement.click();
  }

  onLogout($event) {
    this.api.logout();
    this.router.navigate(['/']);
  }

  onNavClick(address: string) {
    this.address = address;
    this.navbar.close();
  }

  onClosed() {
    if (this.address) {
      this.router.navigate([this.address]);
    }
  }

}
