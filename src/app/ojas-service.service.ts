import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OjasServiceService {

  constructor(private ht:HttpClient) { }
  getEmp(){
    return this.ht.get('http://localhost:3000/Employees');
  }
}
