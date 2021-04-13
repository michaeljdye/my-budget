import { FC } from 'react'
import { Grid } from '@material-ui/core'
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
      <Grid container>
        {expenseItems.map(({ id, ...rest }) => (
          <Grid item xs={12}>
            <ExpenseItem key={id} expenseItem={rest} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
