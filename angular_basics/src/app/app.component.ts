import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Person } from './person';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Basics';
  name = 'Jose Ortiz';

  isDisabled:boolean = true;
  color_red:string = 'red';
  color_blue:string = 'blue';

  bg_color_class:string = "bg_color";

  person:Person = {id:1, name: "Jose",age: 28};

  persons:Person[] = [
    {id:1, name: "Jose", age: 28},
    {id:2, name: "Maria", age: 32},
    {id:3, name: "Ana", age: 25},
    {id:4, name: "Pedro", age: 30},
    {id:5, name: "Laura", age: 27}
  ];

  imageUrlCat = "https://preview.redd.it/long-haired-siamese-v0-1dkn8zf5wekc1.jpg?width=1080&crop=smart&auto=webp&s=f5c9ad4d7de9eb8e824acd32b138285c493ece2a";
  imageUrlDog = "https://www.mondou.com/on/demandware.static/-/Sites-Mondou_CA-Library/default/dw99664a9e/images/Conseil/chien/jackrussell/JACK-RUSSEL-HEADER.jpg";

  userSaved(){
    console.log("user is saved");
  }

}
