import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public todoListData: any;
  constructor(public http: HttpClient) {}
  getTodoLists() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  postTodoList(data: any) {
    this.todoListData = data;
  }

  getTodoListData() {
    return this.todoListData;
  }
}
