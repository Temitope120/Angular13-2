import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { UserDataService } from './services/user-data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  userss: any;

  // usersData: UsersDataService;
  allUsers :any
  constructor(private userData: UserDataService) {
    console.warn(userData.userss())
    this.userss = userData.userss();
  }
  memberData = [
    {name: "Peter", email: "peter@test.com"},
    {name: "Ronald", email: "ronald@test.com"},
    {name: "Bella", email: "bella@test.com"},
    {name: "Folu", email: "folu@test.com"},
    {name: "Ella", email: "ella@test.com"}

  ]

  getUserFormData(data: any) {
    console.warn(data)

  }

  title = 'newAngularProject';
  displayVal:string = "";
  data = 10;
  // 2 way binding
  value:any;
  val: any;
  newTitle = "Two way binding";
  today = Date();
  // forms in angular
  formTitle = "Forms in Angular";

  loginUser(item:any){
    const userInput = item
    console.log(userInput)
    // try to save this on local storage and session storage: DONE
    sessionStorage.setItem(`${userInput},`, JSON.stringify(userInput));
    // learn how to stroe multiple input values to the session storage and local too.

    // localStorage.setItem("user_details", userInput)  Local storage not working fine yet just showing object, object

  }


  obj:{name:string, phone:number} = {
    name: 'peter',
    phone: 123
  }
  arr:number[] = [20, 30, 40]

  getData(val:string){
    console.warn(val)
    this.obj = {name:"joy", phone: 224}
    this.arr = [1, 2, 3]
    this.displayVal = val
  }


  count = 0
  counter(type: string){
    type==='add'?this.count++:this.count--
  }

  updateData(){
    this.data = Math.floor(Math.random() * 10) 
  }


  // Template reference variable
  getVal(item:any){
    console.warn(item)
  }

  // getting the propeties or attribute of any input box, in the .ts file, the parameter would be of type HTMLInputElement
  // getVal(item:HTMLInputElement){
  //   console.warn(item)
  // }

  // alternatives for pipes, making use of a function instead
  capString(item:string){
    return item.toUpperCase()
  }

  user = {
    name: "Ayo",
    age: 30
  }


  // form controls and form group for Reactive Form
  newLoginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),

    // password: new FormControl('123@abc'),
    // instead of blank quotes, default values can be added into it like this, then it can be changed by the user.
  })

  get users() {
    return this.newLoginForm.get('user');

  }

  get password() {
    return this.newLoginForm.get('password');

  }

  loginReactive(){
    console.warn(this.newLoginForm.value)
  }
}

