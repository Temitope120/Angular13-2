import { Component, OnInit } from '@angular/core';

import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  userss: any;
  constructor(private userData: UserDataService) {
    console.warn(userData.userss())
    this.userss = userData.userss();
  }


  ngOnInit(): void {
  }

}
