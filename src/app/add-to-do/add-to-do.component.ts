import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms'
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
  addTodoForm: FormGroup;

  constructor(fb: FormBuilder, private ts: TodoService, private router: Router) {
    this.addTodoForm = fb.group(
      {
        text: new FormControl('', [
          Validators.required,
          Validators.minLength(5)
        ])

      });
  }
  get text() { return this.addTodoForm.get('text') }

  ngOnInit() {
  }

  addTodo(Todo) {
    const helper = new JwtHelperService();
    let token = localStorage.getItem('token');
    const decodedToken = helper.decodeToken(token);

    this.addTodoForm.value._creator = decodedToken._id;

    console.log(this.addTodoForm.value);


    // let todo = new Todo();
    // todo.text = this.addTodoForm.value.text;

    this.ts.addTodo(this.addTodoForm.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/listToDo'])
      },
      err => {
        console.log(err);
      }
    )
  }




}
