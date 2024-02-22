import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-course',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-course.component.html',
  styleUrl: './new-course.component.css'
})
export class NewCourseComponent {
  title= 'New Course';
  editMode = false;
  activeId: string = '';
  isError = false;
  courseForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    duration: new FormControl('',[Validators.required]),
    show: new FormControl(false,[Validators.required]),
    description: new FormControl('',[Validators.required]),
  });

  constructor( private router: Router, private _activatedRoute: ActivatedRoute, private api: ApiService){
    this._activatedRoute.params.subscribe(params => {
      this.activeId = params['id']
        if(this.activeId?.length){      
          this.title = "Edit Course";
          this.editMode = true;
          this.fetchData();
        }
    });
  }

  fetchData(){
    this.api.getCourse(this.activeId).subscribe((data)=>{
      this.courseForm.setValue({
        name: data.name,
        duration: data.duration,
        show: data.show,
        description: data.description
      });
    })
  }

  async doSubmit(){
    if(this.courseForm.valid){
      this.isError = false;
      if(this.editMode){
        this.isError = !await this.api.updateCourse(this.activeId, this.courseForm.value);
      }else{
        this.isError = !await this.api.newCourse(this.courseForm.value);
      }
      this.router.navigateByUrl('/course');
    }else{
      this.isError = true;
      console.log("Please enter valid data")
    }
  }
}
