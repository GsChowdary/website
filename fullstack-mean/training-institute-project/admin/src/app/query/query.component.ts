import { Component } from '@angular/core';
import { ApiService, Query } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-query',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent {
  queries: Query[] = [];
  constructor(private api: ApiService){
    this.api.getQueries().subscribe(data=>{
      this.queries = data;
    })
  }

}
