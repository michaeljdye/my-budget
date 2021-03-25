import { useState, useEffect, FC } from 'react'
import { ExpenseItems } from '@/components/expense'
import { ExpenseTotal } from '@/components/expense'

type ExpenseItem = {
  id: number
  name: string
  category: string
  amount: number
}

type Props = {
  expenseItems: ExpenseItem[]
}

export const Expenses: FC<Props> = ({ expenseItems }) => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newTotal = expenseItems.reduce((acc, { amount }) => {
      return acc + +amount
    }, 0)

    setTotal(newTotal)
  }, [expenseItems])

  return (
    <>
      <ExpenseItems expenseItems={expenseItems} />
      <ExpenseTotal total={total} />
    </>
  )
}
