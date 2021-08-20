import { useState, FC } from "react";
import { TransactionsInput } from "@/components/transactions";

type ExpenseItem = {
  id: number;
  name: string;
  category: string;
  amount: number;
};

type Props = {
  addBudgetItem(expenseItem: ExpenseItem): void;
};

export const Transactions: FC<Props> = ({ addBudgetItem }) => (
  <div>
    <TransactionsInput addBudgetItem={addBudgetItem} />
  </div>
);
