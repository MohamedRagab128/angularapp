import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // تضمين المكتبة هنا


@Component({
  selector: 'contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent  {
  
  /*viewMode = 'HTML';*/

  courses =[
    { id: 1, name: 'courses1'},
    { id: 2, name: 'courses2'},
    { id: 3, name: 'courses3'},
  ];


  onAdd() {
    this.courses.push({ id: 4, name: 'course4'});

  }

  /*onRemove(course: { id: number; name: string; }) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }*/

  /*onChange(course: { id: number; name: string; }) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }*/
   

  /*onChange(course: {id: number; name: string}) {
    course.name = 'UPDATE';
  }*/



  /*courses = [1, 2];*/
 /* isDisabled: boolean = false;
  constructor() {}*/

  /*companyName = "Mohamed Ragab";
  companyAddress = "Tanta";
  companyJobs = "Node.Js Developer";*/

  

}
