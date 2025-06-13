import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

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
  sending = false;

  onSubmit() {
    if (!this.name || !this.email || !this.message) return;

    this.sending = true;
    const serviceID = 'service_89d0uri';
    const templateID = 'template_53my6fi';
    const publicKey  = 'LvN9ft6m2NrL2_u1q';

    const templateParams = {
      from_name: this.name,
      from_email: this.email,
      message: this.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response: EmailJSResponseStatus) => {
        alert('Message sent! Thank you.');
        this.name = this.email = this.message = '';
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        alert('Oops—something went wrong. Please try again later.');
      })
      .finally(() => {
        this.sending = false;
      });
  }
}
