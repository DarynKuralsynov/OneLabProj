import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() name: string='User List';
  constructor() { }

  ngOnInit() {
  }

  nameChange(name){
    this.name=name;
  }
  

}
