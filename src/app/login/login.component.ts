import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userLoginForm : FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router : Router){
    this.userLoginForm=formBuilder.group({id:0,firstName:'',lastName:'',emailId:'',mobile:"",password:"",isDeleted:false,dateAdded:new Date('dd-mm-yyyy'),dateModified:new Date('dd-mm-yyyy')});
 
  }

  ngOnInit(){}

  Login(login : any){
  
    this.router.navigate(['profile']);
  }
 
  // userLoginForm: FormGroup;
  // user:User={"id":0,"firstName":'',"lastName":'',"emailId":'',"mobile":"","password":"","isDeleted":false,"dateAdded":new Date(),"dateModified":new Date()};
  
  // constructor(private userService:UserService,private router:Router,formBuilder: FormBuilder) { 
     //this.userLoginForm=formBuilder.group({id:0,firstName:'',lastName:'',emailId:'',mobile:"",password:"",isDeleted:false,dateAdded:new Date('dd-mm-yyyy'),dateModified:new Date('dd-mm-yyyy')});
  //    }
  // ngOnInit() {
  // }
  // login(LoginInformation : any){
   
  //   console.log(this.userLoginForm);''''

  //   // this.userService.registerUser(this.userForm.value).subscribe(
  //   //   (data)=>{this.router.navigate(['login']);}
  //   //   );


  //   this.userService.login(this.user).subscribe(data=>{
  //     if(this.user.password==data.password){
  //       this.router.navigate(['profile',data.id]);
  //     }
  //     else{
  //       alert("login denied");
  //     }
  //   })
  // }














//   user:User={"id":0,"firstName":'',"lastName":'',"emailId":'',"mobile":"","password":"","isDeleted":false,"dateAdded":new Date(),"dateModified":new Date()};

// // userLoginForm : FormGroup;

//   constructor(private userService : UserService, private router : Router, formBuilder : FormBuilder) { 
//    // this.userLoginForm=formBuilder.group({emailId:'',password:''});
 
//   }

//   ngOnInit() {
//     if((this.userService.isLoggedIn()) )
//     {
//         this.router.navigate(['/profile' , localStorage.getItem('id')]);
//     }
//     else
//     {
//         this.router.navigate(['/login']);
//     }
//   }

//   //create the form object.
//   userLoginForm = new FormGroup({
//     emailId : new FormControl('' , Validators.required),
//     password : new FormControl('' , Validators.required)
//   });

//   Login(LoginInformation : any)
//   {
//       this.user.emailId = this.EmailId.value;
//       this.user.password = this.Password.value;

//       this.userService.login(this.user).subscribe(
//         response => {
//             let result =  response.json();
            
//             if(result > 0)
//             {
//               let token = response.headers.get("Authorization");

//               localStorage.setItem("token" , token);
//               localStorage.setItem("id" , result);
  
//               this.router.navigate(['/profile', result]);
//             }
//             if(result == -1)
//             {
//               alert("please register before login Or Invalid combination of Email and password");
//             }
           
//         },
//         error => {
//             console.log("Error in authentication");
//         }
//       );
//   }

//   get EmailId(){
//       return this.userLoginForm.get('emailId');
//   }

//   get Password(){
//       return this.userLoginForm.get('password');
//   }
}
