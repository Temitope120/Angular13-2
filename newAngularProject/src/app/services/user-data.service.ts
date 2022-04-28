import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  userss() {
    return [
    {
      name: "shewa",
      age: 30,
      email: "shewa@test.com"
    },
    {
      name: "Beauty",
      age: 20,
      email: "beaut@test.com"
    },
    {
      name: "Lolu",
      age: 40,
      email: "lolu@test.com"
    },
    {
      name: "Beatrice",
      age: 18,
      email: "beatrice@test.com"
    },
  ]
  }
}
