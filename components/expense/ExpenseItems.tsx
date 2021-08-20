import { FC } from "react";
import { ExpenseItem } from "@/components/expense";

type ExpenseItem = {
  id: number;
  name: string;
  amount: number;
  category: string;
};

type Props = {
  expenseItems: ExpenseItem[];
};

export const ExpenseItems: FC<Props> = ({ expenseItems }) => {
  return (
    <div>
      <div>
        {expenseItems.map(({ id, ...rest }) => (
          <div>
            <ExpenseItem key={id} expenseItem={rest} />
          </div>
        ))}
      </div>
    </div>
  );
};
