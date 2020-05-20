import { Component, OnInit } from '@angular/core';
import { CurdService } from './../curd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private curd:CurdService, private router:Router) { }
  logindata:any;
  LoginID:any;
  Password:any;
  errorlogin:any;
  confirmation:any;
  response:any;

  login(){
    if (this.LoginID==null || this.Password==null){
      this.errorlogin=true;
      this.confirmation="Enter LoginID & Password";
    }else
    {
      this.logindata={
        "LoginID":this.LoginID,
        "Password":this.Password
      }
      this.curd.checklogin(this.logindata)
      .subscribe(logindata=>{
        this.response=logindata;
        if(this.response['status']==false){
          this.errorlogin=true;
          this.confirmation=this.response['data'];
        }else{
          this.errorlogin=false;
          localStorage.setItem('success_login',"true");
          localStorage.setItem('LoginID',this.LoginID);
          this.router.navigate(['dashboard']);
        }
      });
    }
  }

  ngOnInit() {
  }

}
