import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { FooterComponent } from "./footer/footer.component";
import { EmployeesComponent } from "./employees/employees.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ReactiveFormComponent, FooterComponent, EmployeesComponent, PageNotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_reactive_forms';
}
