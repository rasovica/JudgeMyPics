import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {signUp} from '../service/amplify';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  customError = '';

  constructor(private router: Router, private fb: FormBuilder) {
    this.registerForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.min(6)])],
      'email': [null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  ngOnInit() {
  }

  signUp(data: any) {
    signUp(data).then(() => {
      this.router.navigate(['/confirm']);
    }).catch(error => this.customError = error);
  }
}
