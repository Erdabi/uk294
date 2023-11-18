// Import necessary Angular modules and components
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { RegisterDto, UserControllerService } from "../../../openapi-client";

// Component decorator with metadata
@Component({
  selector: 'pm-login', // Selector for the component
  standalone: true, // This property is not standard Angular. You may want to check if it's required by any specific library or framework.
  imports: [CommonModule, MatCardModule, FormsModule, ReactiveFormsModule], // Imported modules for the component
  templateUrl: './login.component.html', // Path to the component's HTML file
  styleUrls: ['./login.component.scss'] // Path to the styling rules of the component
})
export class LoginComponent {
  formGroup!: FormGroup; // Property to hold the form group

  // Constructor with dependency injection for FormBuilder and UserControllerService
  constructor(
    private fb: FormBuilder,
    private userService: UserControllerService
  ) {
    // Initialize the form group with form controls and validators
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  // Method triggered on form submission
  logform() {
    console.log(this.formGroup); // Log the form group to the console
    console.log(this.formGroup.errors); // Log any form group errors to the console

    // Check if the form is valid before making the API call
    if (this.formGroup.valid) {
      // Call the login method in the user service, passing the form values
      this.userService.login(this.formGroup.value as RegisterDto).subscribe(token => {
        console.log(token); // Log the token to the console
        localStorage.setItem('ACCESS_TOKEN', token.token as string); // Store the access token in local storage
        alert('Successfully logged in'); // Show a success alert
      });
    }
  }
}
