export interface PaymentDetailResponse {
  consolidated: string;
  competenceDate: string;
  loanAmount: number;   
  outstandingBalance: number;
  installmentAmount: number;
  principalAmortization: number;
  principalBalance: number;
  provision: number;
  accumulatedInterest: number;
  paidAmount: number;
}
