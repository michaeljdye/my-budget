import { FC } from 'react'

type Props = {
  total: number
}

export const ExpenseTotal: FC<Props> = ({ total }) => {
  return (
    <div>
      <p>Total: {total}</p>
    </div>
  )
}
