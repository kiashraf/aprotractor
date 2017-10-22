import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class HttpService{
 constructor(private http: Http) {}

 saveProfile(profile: any){
    return this.http.post('https://aprotractor-cj.firebaseio.com/profile.json', profile);
 }

}