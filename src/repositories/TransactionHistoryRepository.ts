// src/repositories/TransactionHistoryRepository.ts
import { BankRepository, Transaction } from '../interfaces/interface';
import { bankRepository } from '../repositories/BankRepository';

class TransactionHistoryRepository implements BankRepository {
  depositMoney(transaction: Transaction): void {
    bankRepository.depositMoney(transaction);
  }

  withdrawMoney(transaction: Transaction): void {
    bankRepository.withdrawMoney(transaction);
  }

  getBalance(): number {
    return bankRepository.getBalance();
  }

  getTransactions(): Transaction[] {
    return bankRepository.getTransactions();
  }
}

export const transactionHistoryRepository: BankRepository = new TransactionHistoryRepository();
