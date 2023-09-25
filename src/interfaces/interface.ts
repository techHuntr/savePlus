export interface Transaction {
  amount: number;
  remarks: string;
  name: string;
}

export interface BankState {
  balance: number;
  transactions: Transaction[];
}

export interface BankRepository {
  depositMoney: (transaction: Transaction) => void;
  withdrawMoney: (transaction: Transaction) => void;
  getBalance: () => number;
  getTransactions: () => Transaction[];
}

export interface ThemeState {
  theme: string;
  darkMode: boolean | null;
}