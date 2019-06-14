import { Component, OnInit } from '@angular/core';
import { users } from '../users'
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users=users;

  @Output() nameEmitter = new EventEmitter<any>();

  constructor() { }
  ngOnInit() {
  }

  show(name: any){
    console.log(name);
    this.nameEmitter.emit(name);
  }

}
