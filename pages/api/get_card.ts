import { Card } from '@/components/card'
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse<Card>) {
    const card = await fetch_card()
        .then(async (card) => {
            await prisma.$disconnect()
            console.log(card)
            return card
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        });

    if (card) {
        res.status(200).json(card)
    } else {
        res.status(403)
    }
}

async function fetch_card(): Promise<Card | null> {
    const sentence = await prisma.sentences.findFirst()
    if (!sentence) return null

    console.log(sentence)

    const card: Card = {
        front: sentence.front || '',
        back: sentence.back || ''
    }

    return card
}
