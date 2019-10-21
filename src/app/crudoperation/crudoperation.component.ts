import { Component } from '@angular/core';

@Component({
  selector: 'app-crudoperation',
  templateUrl: './crudoperation.component.html',
  styleUrls: ['./crudoperation.component.css']
})
export class CrudoperationComponent{
  employees:any=[];
  model:any=[];
  msg:any="";
  num:number;
    addEmployee(){
    this.employees.push(this.model);
    this.model=[];

    this.msg="Added successfully";
    let A=this.myvalue;
    for(let j=0;j<this.employees.length;j++){
      if(j==A){
        this.employees[j]=this.model;
        this.model=[];
        this.msg='successfully updated';
      }
    }
  }
  myvalue;
  editEmployee(i){
    this.model.firstName= this.employees[i].firstName;
    this.model.lastName= this.employees[i].lastName;
    this.model.mail= this.employees[i].mail;
    this.model.mobile= this.employees[i].mobile;
    this.employees.splice(i,1);
    this.myvalue=i;
  }
  deleteEmployee(i){
    this.employees.splice(i,1);
    this.msg="deleted successfully";
  }
}