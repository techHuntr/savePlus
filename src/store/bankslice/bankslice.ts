// src/store/bankslice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transaction, BankState } from '../../interfaces/interface';
import { bankRepository } from '../../repositories/BankRepository';

const initialState: BankState = {
  balance: bankRepository.getBalance(),
  transactions: bankRepository.getTransactions(),
};

const slice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    depositMoney: (state, action: PayloadAction<Transaction>) => {
      bankRepository.depositMoney(action.payload);
      state.balance = bankRepository.getBalance();
      state.transactions = bankRepository.getTransactions();
    },
    withdrawMoney: (state, action: PayloadAction<Transaction>) => {
      bankRepository.withdrawMoney(action.payload);
      state.balance = bankRepository.getBalance();
      state.transactions = bankRepository.getTransactions();
    },
  },
});

export const { depositMoney, withdrawMoney } = slice.actions;

export default slice.reducer;
