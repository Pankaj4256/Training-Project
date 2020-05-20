import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurdService } from './../curd.service';

@Component({
  selector: 'app-csefaculty',
  templateUrl: './csefaculty.component.html',
  styleUrls: ['./csefaculty.component.css']
})
export class CsefacultyComponent implements OnInit {

  constructor(private curd:CurdService, private router:Router) { }
  userdata:any;
  LoginID:any;
  record:any;
  isDelete:any;
  delconfirmation:any;
  
  user_list(){
    this.userdata={};
    this.curd.userlist(this.userdata)
    .subscribe(list =>{this.record=list});
  }
  
  edit_user(LoginID) {
    localStorage.setItem('LoginID', LoginID);
    this.router.navigate(['/edituser']);
  }

  deleteuser(LoginID){
    this.userdata={
      "LoginID":LoginID
    }
    this.record.data=this.record.data.filter(re => re.LoginID!==LoginID);
    this.curd.deleteuser(this.userdata).subscribe();
    this.isDelete=true;
    this.delconfirmation="Data deleted Successfully."
  }

  ngOnInit() {
    this.LoginID=localStorage.getItem('LoginID');
    if(localStorage.getItem('success_login')==null){
      this.router.navigate(['']);
    }
    this.user_list();
  }

}
