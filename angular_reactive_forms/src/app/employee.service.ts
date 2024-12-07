import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 // Http: HttpClient = inject(HttpClient);

  constructor(private http:HttpClient) { }

  getEmployees() {

    return this.http.get('http://localhost:3000/employees/');

  }
}
