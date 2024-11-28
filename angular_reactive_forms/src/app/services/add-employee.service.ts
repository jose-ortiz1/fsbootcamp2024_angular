import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  http: HttpClient = inject(HttpClient);

  constructor() { }

  AddEmployee(employee: any){
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers, name: employee.name, department: employee.department};
    return this.http.post(`http://localhost:3000/employees`, options); 

  }

}
