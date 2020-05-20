import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurdService {

  constructor(private http:HttpClient) { }
  insertData(register){
    return this.http.post('http://localhost:3000/register_data',register);
  }
  checklogin(login){
    return this.http.post('http://localhost:3000/login_check',login);
  }
}
