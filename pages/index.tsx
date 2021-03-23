import { useState, FC } from 'react'
import { Layout } from '@/components/layout'
import { BudgetItems } from '@/components/budget'
import BudgetItemInput from '@/components/budget/BudgetItemInput'

type BudgetItem = {
  id: number
  name: string
  amount: number
  category: string
}

const budgetData = [
  { id: 1, name: 'Groceries', amount: 200, category: 'food' },
  { id: 2, name: 'Entertainment', amount: 100, category: 'food' },
  { id: 3, name: 'Fun Money', amount: 50, category: 'personal' },
]

const Home: FC = () => {
  const [budgetItems, setBudgetItems] = useState(budgetData)

  const addBudgetItem = (budgetItem: BudgetItem): void => {
    setBudgetItems(prevBudgetItems => [...prevBudgetItems, budgetItem])
  }

  return (
    <Layout>
      <BudgetItemInput addBudgetItem={addBudgetItem} />
      <BudgetItems budgetItems={budgetItems} />
    </Layout>
  )
}

export default Home
