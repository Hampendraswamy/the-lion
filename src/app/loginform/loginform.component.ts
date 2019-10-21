import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

loginData:any=[];
model:any=[];
sub(){
  this.loginData.push(this.model)
}

  constructor() { }

  ngOnInit() {
  }

}
