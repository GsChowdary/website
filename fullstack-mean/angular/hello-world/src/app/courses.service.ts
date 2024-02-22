import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses = ['html', 'css', 'js', 'angular', 'node'];
  constructor() { }

  getCourses() : string[]{
    return this.courses;
  }
}
