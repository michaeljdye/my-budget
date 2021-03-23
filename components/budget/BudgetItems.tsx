import { FC } from 'react'
import { BudgetItem } from '@/components/budget'

type BudgetItem = {
  id: number
  name: string
  amount: number
  category: string
}

type Props = {
  budgetItems: BudgetItem[]
}

export const BudgetItems: FC<Props> = ({ budgetItems }) => {
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
