
import { Transaction, BankState, BankRepository } from '../interfaces/interface';

class BankData implements BankRepository {
  private bankData: BankState = {
    balance: 100,
    transactions: [],
  };

  depositMoney(transaction: Transaction): void {
    try {
      this.bankData.balance += transaction.amount;
     
      this.bankData.transactions = [...this.bankData.transactions, transaction];
    } catch (e) {
      console.log(e)
    }
  }

  withdrawMoney(transaction: Transaction): void {
    try {
      if (this.bankData.balance >= -transaction.amount) {
        this.bankData.balance -= transaction.amount;
        const newWithdrawalTransaction = {
          amount: -transaction.amount,
          remarks: transaction.remarks,
          name: transaction.name,
        };
        this.bankData.transactions = [...this.bankData.transactions, newWithdrawalTransaction];
      }
    } catch (e) {
      console.log(e)
    }
  }

  setPreviousTransactions (transactions : Transaction[]) : void {
       this.bankData.transactions = transactions
  }

  getBalance(): number {
    return this.bankData.balance;
  }

  getTransactions(): Transaction[] {
    return this.bankData.transactions;
  }
}

export const bankRepository: BankRepository = new BankData();
