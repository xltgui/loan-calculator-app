import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-calculator',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss'
})
export class Calculator implements OnInit {

  startDate: string = '';
  endDate: string = '';
  firstPaymentDate: string = '';
  amount: number | null = null;
  interestRate: number | null = null;

  // Variável para controle do estado do botão
  isButtonDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.checkFormValidity();
  }

  checkFormValidity() {
    this.isButtonDisabled = !(
      this.startDate &&
      this.endDate &&
      this.firstPaymentDate &&
      this.amount !== null && this.amount !== undefined &&
      this.interestRate !== null && this.interestRate !== undefined
    );
  }

}
