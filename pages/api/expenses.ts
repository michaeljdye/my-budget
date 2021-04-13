import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const expenseData = [
    { id: 1, name: 'Groceries', amount: 200, category: 'Home' },
    { id: 2, name: 'Entertainment', amount: 100, category: 'Food' },
    { id: 3, name: "Nicole's Birthday", amount: 50, category: 'Gifts' },
  ]
  res.status(200).json(expenseData)
}
