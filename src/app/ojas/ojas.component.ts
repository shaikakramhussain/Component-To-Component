import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { OjasServiceService } from '../ojas-service.service';

@Component({
  selector: 'app-ojas',
  templateUrl: './ojas.component.html',
  styleUrls: ['./ojas.component.css']
})
export class OjasComponent implements OnInit {
  empname:any;
  employee:any;
  rows=[];
  single_row: any;
  result:any;

  constructor(private s:OjasServiceService) { }
  ngOnInit() {
    this.getData();
    
  }
  @Output() emp=new EventEmitter();

  getData(){
    this.s.getEmp().subscribe(res=>
      {console.log(res)
      this.empname=res;
      })
  }
  onClick(empname){
    this.employee=empname;
    this.emp.emit(this.employee);
    console.log(this.employee);
  }
}
