import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterMedicationService } from '../services/register-medication.service';

@Component({
  selector: 'app-register-medication',
  templateUrl: './register-medication.component.html',
  styleUrl: './register-medication.component.scss'
})
export class RegisterMedicationComponent implements OnInit {
  public form!: FormGroup;
  public key!: string;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: RegisterMedicationService
  ) {
    this.key = this.router.url.split('/')[2];
  }


  ngOnInit(): void {
    this.createForm();
    this.getProduct();
  }

  createForm() {
    this.form = this.formBuilder.group({
      barCode: [''],
      description: [''],
      price: [''],
      expirationDate: [''],
      quantity: ['']
    });
  }

  goBack() {
    this.router.navigate(['']);
  }

  getProduct() {
    if (this.key !== 'register') {
      this.service.getRegisterMedication(this.key).subscribe((product) => {
        this.form.patchValue(product);
      });
    }
  }

  save() {
    if (this.key !== 'register') {
      this.service.updateProduct(this.key, this.form.value).subscribe(() => {
        alert('Product updated successfully');
        this.router.navigate(['products']);
      });
    } else {
      this.service.createRegisterMedication(this.form.value).subscribe(() => {
        alert('Medication registered successfully');
        this.form.reset();
      });
    }
  }

}
