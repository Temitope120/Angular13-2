import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  title = "To Do List";
  // create an empty array
  list: any[] = [];
  // write the function
  addTask(item:string){
    console.warn(item);
    this.list.push({id:this.list.length, name:item})
    console.warn(this.list)
  }

  removeTask(id:number){
    console.warn(id)
    this.list = this.list.filter(it => it.id!== id);
    // to return all id different from the one that is clicked.
  }
  constructor() { }

  ngOnInit(): void {
  }

}
