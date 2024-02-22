import { Component } from '@angular/core';
import { ApiService, Course } from '../api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courses: Course[] = [];

  constructor(private api: ApiService, private router: Router){
    this.loadData();
  }

  loadData(){
    this.api.getCourses().subscribe((data)=>{
      this.courses = data;
    });
  }

  routeToEdit(id: string | undefined){
    this.router.navigateByUrl('new-course/'+id);
  }

  changeStatus(course: Course){
    if(course._id){
      this.api.updateCourse(course._id, {...course, show: !course.show});
      this.loadData();
    }
  }

  deleteCourse(id: string | undefined){
    if(id){
      this.api.deleteCourse(id);
      this.loadData();
    }
  }

}
