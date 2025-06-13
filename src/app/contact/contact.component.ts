import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  onSubmit() {
    console.log({ name: this.name, email: this.email, message: this.message });
    alert('Thanks for reaching out!');
    this.name = this.email = this.message = '';
  }
}
