import { useState, useEffect, FC } from "react";
import {
  ExpenseItems,
  ExpenseTotal,
  ExpenseItemsCreate,
} from "@/components/expense";

type ExpenseItem = {
  id: number;
  name: string;
  category: string;
  amount: number;
};

type Props = {
  expenseItems: ExpenseItem[];
  category: string;
  setExpenseItems: () => void;
};

export const Expenses: FC<Props> = ({
  setExpenseItems,
  expenseItems,
  category,
}) => {
  const [total, setTotal] = useState(0);

  const expenses = expenseItems.filter(
    ({ category: expenseCategory }) => expenseCategory === category
  );

  useEffect(() => {
    const newTotal = expenses.reduce((acc, { amount }) => {
      return acc + +amount;
    }, 0);

    setTotal(newTotal);
  }, [expenseItems]);

  return (
    <>
      <ExpenseItems expenseItems={expenses} />
      <ExpenseTotal total={total} />
      <ExpenseItemsCreate AddExpenseGroup={setExpenseItems} />
    </>
  );
};
