import { useState, FC } from 'react'
import Button from '@material-ui/core/Button'
import { TransactionsInput } from '@/components/transactions'
import { Box } from '@material-ui/core'

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
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  return (
    <div>
      <Box mt={2}>
        <Button variant='contained' color='secondary' onClick={handleOpenModal}>
          Add Transaction
        </Button>
      </Box>
      <TransactionsInput
        addBudgetItem={addBudgetItem}
        isOpen={isOpen}
        handleClose={handleClose}
      />
    </div>
  )
}
