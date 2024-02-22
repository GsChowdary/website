import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private api: ApiService){}

  status: boolean = false;
  showError = false;

  contactForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
    query: new FormControl('',[Validators.required]),
  });

  get name() {
    return this.contactForm.get('name');
  }

  async doSubmit(){
    if(this.contactForm.valid){
      this.showError = false;
      this.status = await this.api.newQuery(this.contactForm.value);
      this.contactForm.reset();
    }else{
      this.showError = true;
    }
  }

}
