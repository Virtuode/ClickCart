import { NgIf, NgClass, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient',
  imports: [NgIf, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient {
  isAddPatient = true;
  hideInitText = true;

  addPatient() {
    this.isAddPatient = !this.isAddPatient;
    this.hideInitText = !this.hideInitText;
  }
}
