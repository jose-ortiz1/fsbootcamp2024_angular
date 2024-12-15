import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from "./students/students.component";
import { Student } from './student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentsComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'angular_in_out';
  val_from_child: string = '';

  student:Student = {id:1, name: "Jose", age: 28}

  valFromChild(val:string){
    console.log(val, "Value came from child");
    this.val_from_child = val;

  }

}
