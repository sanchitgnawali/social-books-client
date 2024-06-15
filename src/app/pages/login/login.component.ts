import {Component} from '@angular/core';
import {AuthenticationRequest} from "../../api/services/models/authentication-request";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../api/services/services/authentication.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {email: '', password: ''}
  errors: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  login() {
    this.errors = [];
    this.authService.authenticate({
      body: this.authRequest,
    }).subscribe({
      next: () => {
        // save the token
        this.router.navigate(["books"])
      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errors = err.error.validationErrors;
        } else {
          this.errors.push(err.error.error)
        }
      }
    })
  }

  register() {
    this.router.navigate(['register']);
  }
}
