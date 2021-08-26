import formatCurrency from "../../utils/formatCurrency";

type props = {
  expenseItem: {
    name: string;
    category: string;
    amount: number;
  };
};

export const ExpenseItem = ({
  expenseItem: { name, amount, category },
}: props) => {
  return (
    <div>
      <p>
        {name} - {formatCurrency(amount)} - {category}
      </p>
    </div>
  );
};
