import { useState, FC, SyntheticEvent, ChangeEvent } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Modal, Container, Typography } from '@material-ui/core'

type BudgetItem = {
  id: number
  name: string
  amount: number
  category: string
}

type Props = {
  addBudgetItem(value: BudgetItem): void
  isOpen: boolean
  handleClose(): void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[3],
      padding: theme.spacing(2, 4, 3),
    },
  })
)

export const TransactionsInput: FC<Props> = ({
  addBudgetItem,
  isOpen,
  handleClose,
}) => {
  const [values, setValues] = useState({
    name: '',
    amount: 0,
    category: 'Home',
  })
  const classes = useStyles()

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues(() => ({ ...values, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const budgetItem = {
      id: 4,
      name: values.name,
      amount: values.amount,
      category: values.category,
    }

    addBudgetItem(budgetItem)
  }

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='Add transaction'
      aria-describedby='Add income or expense'
      className={classes.root}
    >
      <Container className={classes.paper} maxWidth='md'>
        <Typography component='div' variant='h4' gutterBottom={true}>
          Add New Transaction
        </Typography>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            value={values.name}
            onChange={handleChange}
            placeholder='Name'
          />
          <input
            type='number'
            name='amount'
            value={values.amount}
            onChange={handleChange}
            placeholder='Amount'
          />
          <select
            name='category'
            value={values.category}
            onChange={handleChange}
          >
            <option value='Home'>Home</option>
            <option value='Food'>Food</option>
            <option value='Gifts'>Gifts</option>
          </select>
          <button type='submit'>Add</button>
        </form>
      </Container>
    </Modal>
  )
}
