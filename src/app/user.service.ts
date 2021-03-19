import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from 'src/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:9090/';
  user: User | undefined;

  constructor(private http: HttpClient, private router : Router) { }

//   registerUser(user:User){
//     return this.http.post(this.userUrl+"user/signup",user);
//   }


registerUser(user : User) : Observable<any>
  {
      let url = this.userUrl + "user/signup";
      return this.http.post(url,user);
  }

  login(user : User) : Observable<any>
  {
      let url = this.userUrl + "user/login";
      return this.http.post(url, user);
  }

  
  
    

}
