import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  formReg: FormGroup;

  constructor(
    private userService: UsersService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.login(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/admin/dashboard']);
      })
      .catch(error => console.log(error));
  }
}
