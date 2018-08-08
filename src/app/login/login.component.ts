import { Component, OnInit } from '@angular/core';
import {signIn} from '../service/amplify';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  customError = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  login(data: any) {
    signIn(data).then(() => {
      this.router.navigate(['/profile']);
  }).catch(error => this.customError = error);
  }
}
