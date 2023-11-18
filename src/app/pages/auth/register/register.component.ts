// Import necessary Angular modules and components
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RegisterDto, UserControllerService } from "../../../openapi-client";

// Component decorator with metadata
@Component({
  selector: 'pm-register', // Selector for the component
  standalone: true, // This property is not standard Angular. You may want to check if it's required by any specific library or framework.
  imports: [CommonModule, MatInputModule, ReactiveFormsModule], // Imported modules for the component
  templateUrl: './register.component.html', // Path to the component's HTML file
  styleUrls: ['./register.component.scss'] // Path to the styling rules of the component
})
export class RegisterComponent {
  formGroup!: FormGroup; // Property to hold the form group

  // Constructor with dependency injection for FormBuilder and UserControllerService
  constructor(
    private fb: FormBuilder,
    private userService: UserControllerService
  ) {
    // Initialize the form group with form controls and validators for user registration
    this.formGroup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      street: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      zip: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      mobilePhone: ['', [Validators.minLength(0), Validators.maxLength(15)]],
      phone: ['', [Validators.minLength(0), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  // Method triggered on form submission
  regform() {
    console.log(this.formGroup); // Log the form group to the console
    console.log(this.formGroup.errors); // Log any form group errors to the console

    // Check if the form is valid before making the API call
    if (this.formGroup.valid) {
      // Call the register method in the user service, passing the form values
      this.userService.register(this.formGroup.value as RegisterDto).subscribe(val => {
        alert('Successfully registered'); // Show a success alert
      });
    }
  }
}
