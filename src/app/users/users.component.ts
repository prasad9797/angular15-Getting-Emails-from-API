import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  emails: string[] = [];
  constructor(private getDataService: GetDataService) {}

  ngOnInit() {
    this.getDataService.getData().subscribe((emails) => (this.emails = emails));
  }
}
