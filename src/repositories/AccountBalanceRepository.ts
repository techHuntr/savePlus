
import { BankRepository, Transaction } from '../interfaces/interface';
import { bankRepository } from '../repositories/BankRepository';

class AccountBalanceRepository implements BankRepository {
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

export const accountBalanceRepository: BankRepository = new AccountBalanceRepository();
