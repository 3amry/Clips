import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showAlert = false;
  inSubmission = false;
  alertMsg = '';
  alertColor = '';

  credentials = {
    email: '',
    password: '',
  };

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  async login() {
    this.alertMsg = 'Logging in..';
    this.alertColor = 'blue';
    this.showAlert = true;
    this.inSubmission = true;

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
    } catch (e) {
      this.alertMsg = 'An Error has Ocurred!';
      this.alertColor = 'red';
      this.inSubmission = false;

      return;
    }
    this.alertMsg = 'You are logged in. Nice!';
  }
}
