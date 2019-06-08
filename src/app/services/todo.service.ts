import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private addTodoUrl = "http://localhost:3000/todo/addToDo";
  private allTodosUrl ="http://localhost:3000/todo/todoList"

  constructor(private http:HttpClient) { }
  addTodo(todo){
    return this.http.post<any>(this.addTodoUrl,todo);
  }

  ListTodos(id){
    return this.http.post<any>(this.allTodosUrl,id);
  }

  
}
