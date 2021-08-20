import { useState, FC, SyntheticEvent, ChangeEvent } from "react";

type BudgetItem = {
  id: number;
  name: string;
  amount: number;
  category: string;
};

type Props = {
  addBudgetItem(value: BudgetItem): void;
};

export const TransactionsInput: FC<Props> = ({ addBudgetItem }) => {
  const [values, setValues] = useState({
    name: "",
    amount: 0,
    category: "Home",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues(() => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const budgetItem = {
      id: 4,
      name: values.name,
      amount: values.amount,
      category: values.category,
    };

    addBudgetItem(budgetItem);
  };

  return (
    <div>
      <p>Add New Transaction</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="amount"
          value={values.amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        <select name="category" value={values.category} onChange={handleChange}>
          <option value="Home">Home</option>
          <option value="Food">Food</option>
          <option value="Gifts">Gifts</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
