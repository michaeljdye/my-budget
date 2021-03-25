import { FC } from 'react'
import { ExpenseItem } from '@/components/expense'

type ExpenseItem = {
  id: number
  name: string
  amount: number
  category: string
}

type Props = {
  expenseItems: ExpenseItem[]
}

export const ExpenseItems: FC<Props> = ({ expenseItems }) => {
  return (
    <div>
      <ul>
        {expenseItems.map(({ id, ...rest }) => (
          <ExpenseItem key={id} expenseItem={rest} />
        ))}
      </ul>
    </div>
  )
}
