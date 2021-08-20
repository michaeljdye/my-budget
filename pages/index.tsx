import { useState, useEffect, FC } from "react";

import { Layout } from "@/components/layout";
import { Expenses } from "@/features/expenses";
import { Transactions } from "@/features/transactions";

type ExpenseItem = {
  id: number;
  name: string;
  category: string;
  amount: number;
};

const Home: FC = () => {
  const categoryData = ["Home", "Food", "Gifts"];

  const [expenseItems, setExpenseItems] = useState([]);

  const getExpenses = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/expenses");
      const expenses = await response.json();

      setExpenseItems(expenses);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExpenses();
  }, []);

  const addBudgetItem = (expenseItem: ExpenseItem): void => {
    setExpenseItems((prevExpenseItems) => [...prevExpenseItems, expenseItem]);
  };

  return (
    <Layout>
      <div>
        {categoryData.map((category) => (
          <>
            <p>{category}</p>
            <Expenses
              category={category}
              expenseItems={expenseItems}
              setExpenseItems={setExpenseItems}
            />
          </>
        ))}
        <Transactions addBudgetItem={addBudgetItem} />
      </div>
    </Layout>
  );
};

export default Home;
