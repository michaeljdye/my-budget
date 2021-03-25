import { useState, FC } from 'react'
import styled from '@emotion/styled'
import { TransactionsInput } from '@/components/transactions'

type ExpenseItem = {
  id: number
  name: string
  category: string
  amount: number
}

type Props = {
  addBudgetItem(expenseItem: ExpenseItem): void
}

export const Transactions: FC<Props> = ({ addBudgetItem }) => {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <div>
      <button onClick={() => setIsHidden(prevHidden => !prevHidden)}>
        Add Transaction
      </button>
      <TransactionsForm isHidden={isHidden}>
        <TransactionsInput addBudgetItem={addBudgetItem} />
      </TransactionsForm>
    </div>
  )
}

type StyleProps = {
  isHidden: boolean
}

const TransactionsForm = styled.div<StyleProps>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
`
