import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, JsonPipe, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  
  empDetails = {
    email : '',
  first_name :'',
  last_name :'',
  salary:  '',
  department :'',


  }



  submitEmployee(emp_form:any){
    

    if(emp_form.form.status == 'VALID'){
      console.log(emp_form.form.value)
    } else {
      console.log('Form is invalid')
    }
  }

}
