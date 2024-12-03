import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  @Input() title_from_parent:string = "";
  @Input() student_obj_from_parent! : Student;
  @Output() event_to_send = new EventEmitter();


  addVal(val:string){
    //console.log(val);
    this.event_to_send.emit(val);
    

  }
}
