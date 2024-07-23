import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule],
  declarations: [AppComponent, UsersComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
