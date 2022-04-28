import { Component, OnInit, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userId:string | null = null;

  title = "Reusable Component";
  userDetails = [
    {
      name: "Anil",
      email:"anil@test.com"
    },
    {
      name: "Sam",
      email:"sam@test.com"
    },
    {
      name: "Peter",
      email:"peter@test.com"
    },
    {
      name: "Tony",
      email:"tony@test.com"
    },
  ]


  userss: any;

  constructor(private route: ActivatedRoute,  userData: UserDataService) {
    console.warn(userData.userss())
    this.userss = userData.userss();
   }

  @Input() item:{name:string, email:string} = {name: '', email: ''}

  ngOnInit(): void {
    // console.warn("user id is", this.route.snapshot.paramMap.get("id"))
    this.userId =  this.route.snapshot.paramMap.get("id") 
  }

}
