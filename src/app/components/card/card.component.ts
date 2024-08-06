import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public cardName: string;
  public cardNumber: string;
  public cardExpiryMM: string;
  public cardExpiryYY: string;
  public cardCVC: string;
  public submitted: boolean;
  public cardForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.cardName = '';
    this.cardNumber = '';
    this.cardExpiryMM = '';
    this.cardExpiryYY = '';
    this.cardCVC = '';
    this.submitted = false;
    this.cardForm = this.formBuilder.group({
      cardName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      cardExpiryMM: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      cardExpiryYY: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      cardCVC: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if (this.cardForm.invalid) {
      return;
    }
  }

  resetForm() {
    this.cardName = '';
    this.cardNumber = '';
    this.cardExpiryMM = '';
    this.cardExpiryYY = '';
    this.cardCVC = '';
    this.submitted = false;
  }

}
