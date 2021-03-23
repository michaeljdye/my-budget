import { useState, FC, SyntheticEvent } from 'react'

type BudgetItem = {
  id: number
  name: string
  amount: number
  category: string
}

type Props = {
  addBudgetItem(value: BudgetItem): void
}

const BudgetItemInput: FC<Props> = ({ addBudgetItem }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const budgetItem = { id: 4, name: value, amount: 200, category: 'food' }

    addBudgetItem(budgetItem)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='budgetItem'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

export default BudgetItemInput
