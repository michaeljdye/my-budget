import { useState, useEffect, Fragment } from "react";

import { Layout } from "@/components/layout";
import { Expenses } from "@/features/expenses";
import { Transactions } from "@/features/transactions";
import formatCurrency from "utils/formatCurrency";

type ExpenseItem = {
  id: number;
  name: string;
  category: string;
  amount: number;
};

const Home = () => {
  const categoryData = ["Home", "Food", "Gifts"];

  const [expenseItems, setExpenseItems] = useState<ExpenseItem[]>([]);
  const [total, setTotal] = useState(0);

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

  useEffect(() => {
    setTotal(
      expenseItems.reduce(
        (acc: number, curr: ExpenseItem) => acc + curr.amount,
        0
      )
    );
  }, [expenseItems]);

  const addBudgetItem = (expenseItem: ExpenseItem): void => {
    setExpenseItems((prevExpenseItems) => [...prevExpenseItems, expenseItem]);
  };

  return (
    <Layout>
      <div>
        {categoryData.map((category) => (
          <Fragment key={category}>
            <strong>
              <p>{category}</p>
            </strong>
            <Expenses category={category} expenseItems={expenseItems} />
          </Fragment>
        ))}
        <div>
          <strong>Total:</strong> {formatCurrency(total)}
        </div>
        <Transactions addBudgetItem={addBudgetItem} />
      </div>
    </Layout>
  );
};

export default Home;
