import { FC } from 'react'
import { BudgetItem } from '@/components/budget'

const budgetItems = [
  { id: 1, name: 'Groceries', amount: 200, category: 'food' },
  { id: 2, name: 'Entertainment', amount: 100, category: 'food' },
  { id: 3, name: 'Fun Money', amount: 50, category: 'personal' },
]

export const BudgetItems: FC = () => {
  return (
    <div>
      <ul>
        {budgetItems.map(({ id, ...rest }) => (
          <BudgetItem key={id} budgetItem={rest} />
        ))}
      </ul>
    </div>
  )
}
