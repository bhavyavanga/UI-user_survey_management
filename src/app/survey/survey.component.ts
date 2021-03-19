import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  surveyForm :FormGroup ;

 // userData:User={"id":0,"firstName":'',"lastName":'',"emailId":'',"mobile":"","password":"","isDeleted":false,"dateAdded":new Date(),"dateModified":new Date()};
  constructor(private surveyService:SurveyService,private router:Router,formBuilder: FormBuilder) { 
 this.surveyForm=formBuilder.group({

  id: 0,
  title: '',
  description: '',
  city: '',
  state : '',
  country: '',
  zip: '',
  surveyDate: '',
  isDeleted: false,
  dateAdded: new Date('dd-mm-yyyy'),
  addedBy: 0,
  dateModified: new Date('dd-mm-yyyy'),
 });

   }

  ngOnInit() {
  }
saveSurvey(){
  console.log(this.surveyForm.value);
  this.surveyService.saveSurvey(this.surveyForm.value).subscribe(
    (data)=>{this.router.navigate(['surveyList']);}
    );
}



}
