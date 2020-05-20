import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  LoginID:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.LoginID=localStorage.getItem("LoginID");
    if(localStorage.getItem('success_login')==null){
      this.router.navigate(['']);
    }
  }

}
