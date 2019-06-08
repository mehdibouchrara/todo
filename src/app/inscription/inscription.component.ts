import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms'
import { Options } from 'selenium-webdriver/edge';
import { PasswordValidators } from './password.validators';
import { EmailValidators } from './email.validators';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm: FormGroup;

  constructor(fb: FormBuilder,private us:UserService,private router:Router) {
    this.inscriptionForm = fb.group(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ]),


        firstname: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),

        lastname: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        email: new FormControl(null, [
          Validators.required,
          Validators.email
        ]),
        tel: new FormControl('', [
          Validators.required,
          Validators.pattern('[002162,002165,002169]{6}[0-9]{7}')
        ]),
        repPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8)

        ])

      }, {
        validator: [PasswordValidators.passwordShouldMatch]
      }
    );
  }

  get password() { return this.inscriptionForm.get('password') }
  get firstname() { return this.inscriptionForm.get('firstname') }
  get lastname() { return this.inscriptionForm.get('lastname') }
  get tel() { return this.inscriptionForm.get('tel') }
  get email() { return this.inscriptionForm.get('email') }
  get repPassword() { return this.inscriptionForm.get('repPassword') }




  inscription() {
    console.log(this.inscriptionForm.value);
    this.us.registerUser(this.inscriptionForm.value).subscribe(
      res=>{console.log(res);
        this.router.navigate(['/'])
      },
      err=>{console.log(err);
      }
    )
  }
  ngOnInit() {
  }

}
