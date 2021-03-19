export class User {
    id: number | undefined;
    password: string;
    firstName: string;
    lastName: string;
    emailId: string;
    mobile: string;
    isDeleted: boolean;
    dateAdded: Date;
    dateModified: Date;
  
    constructor(password: string,firstName: string, lastName: string, emailId: string,mobile: string,isDeleted: boolean,dateAdded: Date,dateModified: Date) {
     // this.id = id;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
      this.emailId = emailId;
      
      this.mobile= mobile;
      this.isDeleted = isDeleted;
      this.dateAdded = dateAdded;
      this.dateModified = dateModified;
    }
  
  }