export class Survey {
    id: number;
    title: string;
    description: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    surveyDate: string;
    isDeleted: boolean;
    dateAdded: Date;
    addedBy: number;
    dateModified: Date;
  
    constructor(id: number,title: string,description: string, city: string,state: string,country: string, zip: string,surveyDate: string,isDeleted: boolean,dateAdded: Date,addedBy: number,dateModified: Date) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.city = city;
      this.state = state;
      this.country= country;
      this.zip = zip;
      this.surveyDate = surveyDate;
      this.isDeleted = isDeleted;
      this.dateAdded = dateAdded;
      this.addedBy = addedBy;
      this.dateModified= dateModified;
    }
  
  }