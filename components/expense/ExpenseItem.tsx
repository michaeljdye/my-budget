import { FC } from 'react'

type props = {
  expenseItem: {
    name: string
    category: string
    amount: number
  }
}

export const ExpenseItem: FC<props> = ({
  expenseItem: { name, amount, category },
}) => {
  return (
    <li>
      {name} - ${amount} - {category}
    </li>
  )
}
