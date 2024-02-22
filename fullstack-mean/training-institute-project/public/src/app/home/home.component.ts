import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule, UpperCasePipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  images = [
    '/assets/1.jpg',
    '/assets/2.jpg',
    '/assets/4.jpg'
  ];
  courses: any[] = [];
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.loadData();
  }

  async loadData(){
    this.courses = await this.api.getCouses();
    this.courses = this.courses.filter((c)=> c.show);
    console.log('Courses', this.courses);
  }

}
