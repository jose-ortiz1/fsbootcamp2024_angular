import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ValidatePassword } from '../custom-password-validation';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  //employeeService: AddEmployeeService = inject(AddEmployeeService);
  emp_data:EmployeeService = inject(EmployeeService);
  route:ActivatedRoute = inject(ActivatedRoute);
  router:Router = inject(Router);

  emp:any = [];

  employeeForm = new FormGroup({

    employee_id: new FormControl<number>(0),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6), ValidatePassword]),
    firstName: new FormControl('',[Validators.required], ),
    lastName: new FormControl(''),
    salary: new FormControl(''),
    department: new FormControl('',[Validators.required])

  })
  

  addEmployee(){

    console.log(this.employeeForm);

    if(this.employeeForm.status == 'VALID'){
      console.log(this.employeeForm.value);
      if(this.employeeForm.value){
        const emp_ID = this.employeeForm.value.employee_id;
        //update here
        if(emp_ID && emp_ID>0){
          console.log('update the employee');
          this.emp_data.updateEmployee(emp_ID, this.employeeForm.value).subscribe((result) => {
            console.log(result);
            this.router.navigate(['/employees']);
          })
        }else{
          //create employee request
          console.log('add the employee');
          this.emp_data.createEmployee(this.employeeForm.value).subscribe((result => {
            console.log(result);
            this.router.navigate(['/employees']);
          }))
      }


      }
      

    }
    
    // this.empoyeeForm.reset(); // Reset the form fields after submission
  }

  ngOnInit(){
     
     this.route.paramMap.subscribe((param) => {
      const emp_id = param.get('id');
      if(emp_id){
        // var to tell is updating
        const employee_id = parseInt(emp_id);
        this.emp_data.getEmployeeById(employee_id).subscribe((result:any)=>{
          if(result.length > 0){
            this.emp = result[0];
            console.log(this.emp);
            this.employeeForm.patchValue({
              employee_id: employee_id,
              email: this.emp.email,
              password: this.emp.password,
              firstName: this.emp.first_name,
              lastName: this.emp.last_name,
              salary: this.emp.salary,
              department: this.emp.department_id
            });
          }
        });
      }
    });
  }

}
