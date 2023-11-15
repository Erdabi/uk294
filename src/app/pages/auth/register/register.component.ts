import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import {RegisterDto, UserControllerService} from "../../../openapi-client";

@Component({
  selector: 'pm-register',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserControllerService) {
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
  submit() {
    console.log(this.formGroup);
    console.log(this.formGroup.errors);
    if (this.formGroup.valid) {
    this.userService.register(this.formGroup.value as RegisterDto).subscribe(val => {
    alert('erfolgreich registriert');
      })
    }
  }
}


