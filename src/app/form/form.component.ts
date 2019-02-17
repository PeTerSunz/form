import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
     firstName: this.fb.control(''), //formcontrol แบบเต็ม
     lastName: [''] //formcontrol แบบย่อ
   })}
   
   onSubmit(form: FormGroup){
     console.log(form);
   }
}
