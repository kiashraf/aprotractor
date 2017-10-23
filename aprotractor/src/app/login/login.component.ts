import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from './../httpservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'Protractor Demo';
  @ViewChild('f') signupForm: NgForm;

  constructor(private httpservice: HttpService) {

  }

  onSubmit(form: HTMLFormElement) {
    this.httpservice.saveProfile(form.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
