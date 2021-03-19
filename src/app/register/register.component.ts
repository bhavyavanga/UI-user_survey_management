import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



 userForm :FormGroup ;

 // userData:User={"id":0,"firstName":'',"lastName":'',"emailId":'',"mobile":"","password":"","isDeleted":false,"dateAdded":new Date(),"dateModified":new Date()};
  constructor(private userService:UserService,private router:Router,formBuilder: FormBuilder) { 
 this.userForm=formBuilder.group({id:0,firstName:'',lastName:'',emailId:'',mobile:"",password:"",isDeleted:false,dateAdded:new Date('dd-mm-yyyy'),dateModified:new Date('dd-mm-yyyy')});
  }

  ngOnInit() {
  }
registerUser(){
  console.log(this.userForm.value);
  this.userService.registerUser(this.userForm.value).subscribe(
    (data)=>{this.router.navigate(['login']);}
    );
}


}
