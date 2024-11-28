import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [


    { path: 'add_employee', component: ReactiveFormComponent},
    {path: 'employees', component: EmployeesComponent},
    {path: 'employees/:id', component: EmployeesComponent},
    {path: '', redirectTo: '/employees', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
 

];
