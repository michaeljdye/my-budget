import { useState, useEffect, FC } from 'react'
import { Typography, Container, makeStyles } from '@material-ui/core'

import { Layout } from '@/components/layout'
import { Expenses } from '@/features/expenses'
import { Transactions } from '@/features/transactions'

type ExpenseItem = {
  id: number
  name: string
  category: string
  amount: number
}

const useStyles = makeStyles({
  categoryHeading: {
    paddingTop: 20,
    paddingBottom: 20,
  },
})

const Home: FC = () => {
  const classes = useStyles()

  const categoryData = ['Home', 'Food', 'Gifts']

  const [expenseItems, setExpenseItems] = useState([])

  const getExpenses = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/expenses')
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
      <Container maxWidth='lg'>
        {categoryData.map(category => (
          <>
            <Typography
              variant='h4'
              component='h2'
              className={classes.categoryHeading}
            >
              {category}
            </Typography>
            <Expenses category={category} expenseItems={expenseItems} />
          </>
        ))}
        <Transactions addBudgetItem={addBudgetItem} />
      </Container>
    </Layout>
  )
}

export default Home
