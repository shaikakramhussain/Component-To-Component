import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ojas1',
  templateUrl: './ojas1.component.html',
  styleUrls: ['./ojas1.component.css']
})
export class Ojas1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() data;

}
