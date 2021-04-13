import { FC } from 'react'
import { Box, Typography, Paper } from '@material-ui/core'

type props = {
  expenseItem: {
    name: string
    category: string
    amount: number
  }
}

export const ExpenseItem: FC<props> = ({
  expenseItem: { name, amount, category },
}) => {
  return (
    <Paper elevation={3}>
      <Box my={1} px={2} py={1}>
        <Typography variant='body1'>
          {name} - ${amount} - {category}
        </Typography>
      </Box>
    </Paper>
  )
}
