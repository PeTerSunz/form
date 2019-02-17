import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
   private fb: FormBuilder
  ){

  }
  ngOnInit(){
   this.formGroup = this.fb.group ({
     firstName: this.fb.control('Nattachai'), //formcontrol แบบเต็ม
     lastName: ['Chaiwiriya'], //formcontrol แบบย่อ
     Email: ['nattachai.cha@ku.th'],
     Age: ['22']
   })}
   
   onSubmit(form: FormGroup){
    //  console.log(form);
    //  const value = form.value;
    //  console.log(value);
        const {firstName, lastName, Email, Age} = form.value;
        const user = new User(firstName, lastName, Email, Age);
        console.log(user);
   }
}
