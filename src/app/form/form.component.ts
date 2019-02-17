import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
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
     firstName: this.fb.control('' ,[Validators.required, Validators.minLength(2)]), //formcontrol แบบเต็ม
     lastName: ['',[Validators.required, Validators.minLength(2)]], //formcontrol แบบย่อ
     Email: ['',[this.EmilValidator]],
     Age: ['',[Validators.min(0),Validators.max(99)]]
   })}
   
   EmilValidator(control: AbstractControl){
    const value: string = control.value;
    if(value && value.includes('@')){
      return null;
    }
    return{
      Email: {
        acturl: value,
        expect: 'email@example'
      }
    }
   }
   onSubmit(form: FormGroup){
    //  console.log(form);
    //  const value = form.value;
    //  console.log(value);
        // console.log(form.valid, form.invalid)
        // console.log((<FormControl>form.get('firstName')).errors);
        // console.log(form.get('firstName').errors);
        // const user = new User(firstName, lastName, Email, Age);
        // console.log(user);
        if(form.valid){
          const {firstName, lastName, Age, Email} = form.value;
          console.log(firstName, lastName, Age, Email);
          const user = new User(firstName, lastName, Email, Age);
          console.log(user);
        } else{
          ['firstName', 'lastName', 'Age', 'Email'].forEach((key: string) => {
            // console.log(form.get(key).touched);
            console.log(form.get(key).errors);
            form.get(key).markAsTouched();
            // console.log(form.get(key).touched);
          })
        }

   }

}
