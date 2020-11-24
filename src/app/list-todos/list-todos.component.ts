import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: string,
    public desc: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'desc', 'done', 'targetDate'];

  dataSource: Todo[] = [
    new Todo('1', 'Maths Assignment', false, new Date()),
    new Todo('2', 'Science Class Test', false, new Date())
  ];

  constructor() {}

  ngOnInit(): void {}
}
