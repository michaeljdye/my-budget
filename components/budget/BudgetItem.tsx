import { FC } from 'react'

type props = {
  budgetItem: {
    name: string
    category: string
    amount: number
  }
}

export const BudgetItem: FC<props> = ({
  budgetItem: { name, amount, category },
}) => {
  return (
    <li>
      {name} - ${amount} - {category}
    </li>
  )
}
