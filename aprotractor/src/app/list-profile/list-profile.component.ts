import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';

import { HttpService } from './../httpservice.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit {
  profile = {};
  profileList: any[];
  constructor(private httpservice: HttpService) {
    this.profileList = [];
    this.httpservice.getProfile().subscribe(
      (response: Response) => {
        const data = response.json();
        console.log(typeof data);
        this.profile = data;
        console.log(this.profile);
        Object.keys(this.profile).forEach(key => {
          this.profileList.push(this.profile[key]);
        });
      },
      (error) => console.log(error)
    );
  }

  ngOnInit() {
  }
S


}
