import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanCalculatorService } from '../services/loan-calculator-service';
import { PaymentDetailResponse } from '../models/payment-detail-response';


@Component({
  selector: 'app-calculator',
  imports: [
    FormsModule,
    ReactiveFormsModule,
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


  paymentDetails: PaymentDetailResponse[] = [];

  constructor(private loanService: LoanCalculatorService) { }

  ngOnInit(): void {
    this.checkFormValidity();
  }


  calculateLoan() {
    const request = {
      startDate: this.startDate,
      endDate: this.endDate,
      firstPaymentDate: this.firstPaymentDate,
      amount: this.amount,
      interestRate: this.interestRate
    };

    
    this.loanService.calculate(request).subscribe(
      (response) => {
        this.paymentDetails = response; // Armazenar a resposta
      },
      (error) => {
        console.error('Erro ao calcular empréstimo:', error);
      }
    );
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
