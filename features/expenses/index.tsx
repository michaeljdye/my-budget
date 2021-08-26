import { useState, useEffect, FC } from "react";
import { ExpenseItems } from "@/components/expense";

type ExpenseItem = {
  id: number;
  name: string;
  category: string;
  amount: number;
};

type Props = {
  expenseItems: ExpenseItem[];
  category: string;
};

export const Expenses: FC<Props> = ({ expenseItems, category }) => {
  const expenses = expenseItems.filter(
    ({ category: expenseCategory }) => expenseCategory === category
  );

  return <ExpenseItems expenseItems={expenses} />;
};
