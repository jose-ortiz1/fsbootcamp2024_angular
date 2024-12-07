import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  router = inject(ActivatedRoute);
  emp_data:EmployeeService = inject(EmployeeService);

  details: string = '';

  employees = [
    { id: 1, name: 'Jose Ortiz', description: 'jose@example.com' },
    { id: 2, name: 'Juan Lopez', description: 'juan@example.com' },
    { id: 3, name: 'Laura Pacheco', description: 'laura@example.com' }
  ]

  constructor(){
    console.log('constructor is called');
    this.router.paramMap.subscribe((param) => {
      const emp_id = param.get('id');
      if(emp_id){
        const employee = this.employees.find(e => {
          if(e.id == parseInt(emp_id)){
            return e;
          } else {
            return null;
          }
        })
        if(employee){
          this.details = `Employee details: ${employee.name} - ${employee.description}`;
        } else {
          this.details = 'No employee found with this ID';
        }
      }
    });


    //this.employees = this.emp_data.getEmployees();



  }


}
