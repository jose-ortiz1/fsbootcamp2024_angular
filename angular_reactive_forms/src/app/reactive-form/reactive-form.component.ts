import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddEmployeeService } from '../services/add-employee.service';
import { Router } from '@angular/router';
import { ValidatePassword } from '../custom-password-validation';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  //employeeService: AddEmployeeService = inject(AddEmployeeService);

  employeeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6), ValidatePassword]),
    firstName: new FormControl('',[Validators.required], ),
    lastName: new FormControl(''),
    salary: new FormControl(''),
    department: new FormControl('',[Validators.required])

  })
  

  constructor(private router: Router){
  }

  addEmployee(){

    const employee = this.employeeForm;
    // this.employeeService.AddEmployee(employee).subscribe(result) => {
    //   console.log('Employee added successfully', result);
    //   this.router.navigate(['/app-reactive-form', {}])
    // }

    console.log(this.employeeForm);
    return false;
    // this.empoyeeForm.reset(); // Reset the form fields after submission

  }

}
