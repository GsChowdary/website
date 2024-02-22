import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LearnDirectivesComponent } from './learn-directives/learn-directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TestComponent, LearnDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
  disabled = false;

  constructor(){
    // Dep injections
    // Initialize
  }

  test(){
    this.title = 'New Title';
    this.disabled = true;
  }
}
