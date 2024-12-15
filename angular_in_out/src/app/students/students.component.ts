import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
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

  constructor(){
    console.log("constructor is called");
   
  }

  ngOnInit() {
    console.log("ngOnInit is called");
    console.log("Before ", this.title_from_parent);

    this.title_from_parent = "title is updated";
    console.log("After ", this.title_from_parent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges is called", changes);
    console.log("Changes ", this.title_from_parent);

  }
}
