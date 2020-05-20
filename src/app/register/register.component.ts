import { Component, OnInit } from '@angular/core';
import { CurdService } from './../curd.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private curd:CurdService) { }
    registrationdata:any;
    fname:any;
    lname:any;
    LoginID:any;
    Password:any;
    repass:any;
    phnnum:any;
    address:any;
    gender:any;
    response:any;
    confirmation:any;
  
    registration(){
      this.registrationdata ={
      "fname":this.fname,
      "lname":this.lname,
      "LoginID":this.LoginID,
      "Password":this.Password,
      "repass":this.repass,
      "phnnum":this.phnnum,
      "address":this.address,
      "gender":this.gender
      }

      this.curd.insertData(this.registrationdata)
      .subscribe(registrationdata =>{
        this.response =registrationdata;
        this.confirmation ="Registration Successful.";
        this.fname="";
        this.lname="";
        this.LoginID="";
        this.Password="";
        this.repass="";
        this.phnnum="";
        this.address="";
        this.gender="";
      });
  }
  ngOnInit() {
  }

}
