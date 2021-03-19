import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from 'src/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private userUrl = 'http://localhost:9090/';
  survey: Survey | undefined;

  constructor(private http : HttpClient) { }

  saveSurvey(survey : Survey) : Observable<any>
  {
      let url = this.userUrl+"survey/save";
      return this.http.post(url,survey);
  }

getSurveys(){
  
}

deleteSurvey(survey : any){}
}
