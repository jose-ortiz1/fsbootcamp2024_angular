import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:string = 'http://localhost:3000/';

 // Http: HttpClient = inject(HttpClient);

  constructor(private http:HttpClient) { }

  getEmployees() {
    return this.http.get(this.url+'employees/');
  }

  getEmployeeById(id: number) {
    return this.http.get(this.url+'employees/'+id);
  }

  createEmployee(data: {}) {
    return this.http.post(this.url+'employees/', data);

  }

  updateEmployee(id:number, data: {}) {
    return this.http.put(this.url+'employees/update/'+id, data);
  }

  deleteEmployee(id: number){
    return this.http.delete(this.url+'employees/delete/'+id);
  }

  
}
