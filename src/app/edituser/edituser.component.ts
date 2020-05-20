import { Component, OnInit } from '@angular/core';
import { CurdService } from './../curd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {


  constructor(private curd: CurdService, private router: Router) { }
  user: any;
  record: any;

  LoginID: any;
  Password: any;
  repass: any;
  gender: any;
  userdata:any;
  edituser:any;

  response:any;
  errorLogin:any;
  confirmation:any;

  //edit user Function Start
  edit_user() {
    
    this.user = localStorage.getItem('LoginID');
    this.userdata = {
      "LoginID": this.user,
    }
    this.curd.getuser(this.userdata)
      .subscribe(user_data => {
        this.record = user_data;
        console.log(this.record);
        this.LoginID = this.record.data[0].LoginID;
        this.edituser = this.record.data[0].LoginID;
        this.Password = this.record.data[0].Password;
        this.repass = this.record.data[0].repass;
        this.gender = this.record.data[0].gender;
      });
  
  }

   //edit user Function End

   updateuser() {

    this.userdata = {
      "LoginID":this.LoginID,
      "Password":this.Password,
      "repass":this.repass,
      "gender":this.gender,
      "edituser":this.edituser
    }
    
    this.curd.updateuser(this.userdata)
      .subscribe(userdata => {
        this.response = userdata;
        console.log(this.response);
        if (this.response.data.status == false) {
          this.errorLogin = true;
          this.confirmation = this.response['data'];
        } else {
          
          this.errorLogin = false;
          this.confirmation = "Member data updated successfully";
          this.edituser = this.LoginID;
         
          

        }
      });
  }
  ngOnInit() {
    this.LoginID = localStorage.getItem('LoginID');
    if (localStorage.getItem('success_login') == null) {
      this.router.navigate(['']);
    }
    this.edit_user();
  }

}