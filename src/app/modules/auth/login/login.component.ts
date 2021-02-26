import {Component, OnInit} from '@angular/core';

import {PrimeNGConfig} from 'primeng/api';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creatingNewUser = false;

  user = new User();

  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  register(): void {

  }

  login(): void {

  }

}
