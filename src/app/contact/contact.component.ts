import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };
  constructor(private http: HttpClient) {}
  onSubmit() {
    this.http
      .post('http://localhost:3000/submit_form', this.formData)
      .subscribe(
        () => {
          console.log('Form submitted successfully');
          this.formData = {
            name: '',
            email: '',
            message: '',
          };
        },
        (error) => {
          console.error('Error submitting form:', error);
          this.formData = {
            name: '',
            email: '',
            message: '',
          };
        }
      );
  }
}
