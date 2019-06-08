import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionForm: FormGroup;
  constructor(fb: FormBuilder, private us: UserService, private router: Router) {
    this.connexionForm = fb.group(
      {
        email: new FormControl(null, [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ])
  
      })
  }
  
  get email() { return this.connexionForm.get('email') }
  get password() { return this.connexionForm.get('password') }

  connexion(){
    console.log(this.connexionForm.value);
    this.us.loginUser(this.connexionForm.value).subscribe(

      res=>{
        console.log(res)
        localStorage.setItem('token',res.token);
        this.router.navigate(['/listToDo']);
      
      },
      err=>{console.log(err);
      }
    )


    
    
  }
ngOnInit() {
}

}
