import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  userss: any;
  constructor(private userData: UserDataService) {
    console.warn(userData.userss())
    this.userss = userData.userss();
  }


  ngOnInit(): void {
  }

}
