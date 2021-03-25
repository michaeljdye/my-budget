import { useState, FC } from 'react'
import { Layout } from '@/components/layout'
import { Expenses } from '@/features/expenses'
import { Transactions } from '@/features/transactions'

const Home: FC = () => {
  type ExpenseItem = {
    id: number
    name: string
    category: string
    amount: number
  }

  const expenseData = [
    { id: 1, name: 'Groceries', amount: 200, category: 'food' },
    { id: 2, name: 'Entertainment', amount: 100, category: 'food' },
    { id: 3, name: 'Fun Money', amount: 50, category: 'personal' },
  ]

  const [expenseItems, setExpenseItems] = useState(expenseData)

  const addBudgetItem = (expenseItem: ExpenseItem): void => {
    setExpenseItems(prevExpenseItems => [...prevExpenseItems, expenseItem])
  }

  return (
    <Layout>
      <Transactions addBudgetItem={addBudgetItem} />
      <Expenses expenseItems={expenseItems} />
    </Layout>
  )
}

export default Home
