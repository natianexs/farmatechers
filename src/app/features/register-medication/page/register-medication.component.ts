import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterMedicationService } from '../services/register-medication.service';

@Component({
  selector: 'app-register-medication',
  templateUrl: './register-medication.component.html',
  styleUrl: './register-medication.component.scss'
})
export class RegisterMedicationComponent implements OnInit {
  public form!: FormGroup;
  mascaraMoedaBR="0,00||00,00||000,00||0000,00";
  public key!: string;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: RegisterMedicationService,
  ) {
    this.key = this.router.url.split('/')[2];
  }

  ngOnInit(): void {
    this.createForm();
    this.getProduct();
  }

  createForm() {
    this.form = this.formBuilder.group({
      barCode: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    });
  }

  goBack() {
    this.router.navigate(['']);
  }

  getProduct() {
    if (this.key) {
      this.service.getRegisterMedication(this.key).subscribe((product) => {
        this.form.patchValue(product);
      });
    }
  }

  save() {
    if(this.form.invalid) return;
    if (this.key) {
      this.service.updateProduct(this.key, this.form.value).subscribe(() => {
        alert('Produto atualizado com sucesso');
        this.router.navigate(['products']);
      });
    } else {
      this.service.createRegisterMedication(this.form.value).subscribe(() => {
        alert('Produto cadastrado com sucesso');
        this.form.reset();
      });
    }
  }

}
