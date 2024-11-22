import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  employeeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    firstName: new FormControl('',[Validators.required], ),
    lastName: new FormControl(''),
    salary: new FormControl(''),
    department: new FormControl('',[Validators.required])

  })

  addEmployee(){
    console.log(this.employeeForm);
    return false;
    // this.empoyeeForm.reset(); // Reset the form fields after submission

  }

}
