import { FC } from 'react'

type props = {
  budgetItem: {
    name: string
    category: string
    amount: number
  }
}

export const BudgetItem: FC<props> = ({ budgetItem: { name } }) => {
  return <li>{name}</li>
}
