import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

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

  //employees:Employee[] = [];
  employees:any;
 

  constructor(){
  
    
  }

  ngOnInit() {

    //get all employees from the service
    this.getAllEmployees();

    //get employee by id
    this.router.paramMap.subscribe((param) => {
      const emp_id = param.get('id');
      if(emp_id){
         this.getEmployeeById(parseInt(emp_id));
      }
    });

  }

  getAllEmployees() {
    this.emp_data.getEmployees().subscribe((val) => {
      this.employees = val;
      console.log(this.employees);
    })
  }

  getEmployeeById(id:number){
    this.emp_data.getEmployeeById(id).subscribe((val:any) => {
      //assing employee if it exists  
      if(val.length >0){
        console.log(val);
        //this.employees = val;
      }
    })

  }

  updateEmployee(id:number){
    if(id){
      this.getEmployeeById(id);
    }
  }



  delEmployee(id: number){
    //  console.log('Id to be deleted',id);
    if(id){
      this.emp_data.deleteEmployee(id).subscribe((result:any) => {
        console.log(result);
        // update the list after deletion
        if(result.status == "success"){
          console.log(`Employee ${id} deleted successfully`);
          this.getAllEmployees();
        }
        
      });
    }
  }
}
