import { NgIf, NgClass, CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Patients } from '../../interfaces/patients';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-patient',
  imports: [NgIf, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient implements OnInit, AfterViewInit {
  isAddPatient = true;
  hideInitText = true;
  patientForm: FormGroup;
  patientArr: Patients[] = [];

  private patientService = inject(ApiService);

  constructor(private formBuilder: FormBuilder) {
    this.patientForm = this.formBuilder.group({
      name: ['', []],
      age: ['', []],
      gender: ['', []],
      phone: ['', []],
      email: ['', []],
      address: ['', []],
      prescBy: ['', []],
    });

    if (this.patientForm.value != null) {
      this.hideInitText = false;
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.getPatientDetail();
  }

  addPatient() {
    this.isAddPatient = !this.isAddPatient;
  }

  getPatientDetail() {
    this.patientService.getAllPatients().subscribe((res) => {
      this.patientArr = res;
    });
  }

  createPatient() {
    const patientObj = this.patientForm.value;
    this.patientService.createPatient(patientObj).subscribe(() => {
      this.getPatientDetail();
    });
  }
}
