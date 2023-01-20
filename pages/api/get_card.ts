import { Card } from '@/components/card'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse<Card>) {
    let card = { front: "front API", back: "back API" } as Card
    console.log(card)
    res.status(200).json(card)
}
