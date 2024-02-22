import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-learn-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learn-directives.component.html',
  styleUrl: './learn-directives.component.css'
})
export class LearnDirectivesComponent {

  show = true;
  courses: string[];

  constructor(courseSvc: CoursesService){
    this.courses = courseSvc.getCourses();
  }

  //For (let i=0; i< len; i++)
  //For of (let itm of arr)
  // For in (let i in arr)

  toogle(){
    this.show = !this.show;
  }
}
