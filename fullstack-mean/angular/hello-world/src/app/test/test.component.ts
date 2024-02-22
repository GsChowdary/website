import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  template: `<h3>Inline template </h3>
  <p>Para</p>`,
  styles: ['h3 {color: red}', 'p {color: blue}'] 
})
export class TestComponent {

}
