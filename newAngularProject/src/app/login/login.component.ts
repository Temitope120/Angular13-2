import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = "No Pain, No Gain"
  show = true;
  color= "orange";
  newColor = "green"
  users = ["Mimi", "Jega", "Samuel", "Ella", "Sony"]
  userDetails = [
    {
      name: "Mimi",
      email: "mil@test.com",
      phone: "999"
    },
    {
      name: "Jega",
      email: "jeg@test.com",
      phone: "9129"
    },
    {
      name: "Samuel",
      email: "sam@test.com",
      phone: "96699"
    },
    {
      name: "Ella",
      email: "ella@test.com",
      phone: "2329"
    },
    
    {
      name: "Sony",
      email: "sony@test.com",
      phone: "80809"
    }
  ]

  // Javascript for loop can only be used here

  // Nested loop example
  newUsers = [
    {
      name: "Anil", 
      phone: "611",
      email: "anil@test.com",
      accounts: ["facebook", "email", "linkedIn"]
    },
    {
      name: "Sam", 
      phone: "181",
      email: "asam@test.com",   
      accounts: ["youtube", "Yahoo", "linkedIn"]
    },
    {
      name: "Peter", 
      phone: "191",
      email: "peter@test.com",
      accounts: ["Yahoo", "Insta", "linkedIn"]
    },
    {
      name: "john", 
      phone: "141",
      email: "Jony@test.com",    
      accounts: ["facebook", "gmail", "youtube"]
    },
    {
      name: "Valerie", 
      phone: "114",
      email: "val@test.com",
      accounts: ["facebook", "email", "linkedIn"]
    },
    {
      name: "Bruce", 
      phone: "121",
      email: "bruce@test.com",
      accounts: ["facebook", "email", "linkedIn"]
    }
  ]

  bgColor = "grey"
  UpdateColor() {
    this.color = "skyblue"
  }

  userData:any = {};
  getData(data:NgForm){
    console.warn(data)
    this.userData = data;
  }




  constructor() { }


  ngOnInit(): void {
  }

}
