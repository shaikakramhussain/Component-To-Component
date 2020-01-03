import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FridayTask';
  empdata:any;
  status:boolean = false;
  parent(p){
    this.empdata=p;
    this.status=true;
  }
}
