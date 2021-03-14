import { FC } from 'react'
import { Layout } from '@/components/layout'
import { BudgetItems } from '@/components/budget'

const Home: FC = () => {
  return (
    <Layout>
      <BudgetItems />
    </Layout>
  )
}

export default Home
