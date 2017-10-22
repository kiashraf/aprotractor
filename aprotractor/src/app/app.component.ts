import { HttpService } from './httpservice.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
