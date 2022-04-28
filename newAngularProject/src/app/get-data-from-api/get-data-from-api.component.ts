import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-get-data-from-api',
  templateUrl: './get-data-from-api.component.html',
  styleUrls: ['./get-data-from-api.component.scss']
})
export class GetDataFromAPIComponent implements OnInit {
  users:any;
  constructor(private usersData: UsersDataService) { 
    this.usersData.users().subscribe(data => {
      this.users = data; 
    })
  }

  ngOnInit(): void {
  }

}
