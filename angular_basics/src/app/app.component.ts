import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Basics';
  name = 'Jose Ortiz';
  person = {id:1, name: "Jose",age: 28};

  persons = [
    {id:1, name: "Jose", age: 28},
    {id:2, name: "Maria", age: 32},
    {id:3, name: "Ana", age: 25},
    {id:4, name: "Pedro", age: 30},
    {id:5, name: "Laura", age: 27}
  ];
}
