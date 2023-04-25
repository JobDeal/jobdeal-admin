import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule, MatSidenavModule,
  MatSlideToggleModule, MatSnackBarModule,
  MatTabsModule, MatToolbarModule
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxDatatableModule,
    MatCardModule, MatButtonModule, MatInputModule, MatSnackBarModule, MatOptionModule, MatSelectModule, MatToolbarModule,
    MatIconModule, MatSidenavModule, MatListModule, MatChipsModule, MatSlideToggleModule, MatDialogModule, MatCheckboxModule,
    MatMenuModule, MatProgressSpinnerModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
