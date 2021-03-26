import { useState, FC } from 'react'
import { Layout } from '@/components/layout'
import { Expenses } from '@/features/expenses'
import { Transactions } from '@/features/transactions'
import { Typography } from '@material-ui/core'

const Home: FC = () => {
  type ExpenseItem = {
    id: number
    name: string
    category: string
    amount: number
  }

  const categoryData = ['Home', 'Food', 'Gifts']

  const expenseData = [
    { id: 1, name: 'Groceries', amount: 200, category: 'Food' },
    { id: 2, name: 'Entertainment', amount: 100, category: 'Food' },
    { id: 3, name: "Nicole's Birthday", amount: 50, category: 'Gifts' },
  ]

  const [expenseItems, setExpenseItems] = useState(expenseData)

  const addBudgetItem = (expenseItem: ExpenseItem): void => {
    setExpenseItems(prevExpenseItems => [...prevExpenseItems, expenseItem])
  }

  return (
    <Layout>
      <Transactions addBudgetItem={addBudgetItem} />
      {categoryData.map(category => (
        <>
          <Typography variant='h4'>{category}</Typography>
          <Expenses category={category} expenseItems={expenseItems} />
        </>
      ))}
    </Layout>
  )
}

export default Home
