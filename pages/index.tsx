import { useState, useEffect, FC } from 'react'
import { Typography } from '@material-ui/core'

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

  const categoryData = ['Home', 'Food', 'Gifts']

  const [expenseItems, setExpenseItems] = useState([])

  const getExpenses = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users')
      const expenses = await response.json()

      setExpenseItems(expenses)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getExpenses()
  }, [])

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
