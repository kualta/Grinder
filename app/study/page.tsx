'use server'

import { PrismaClient, Sentence } from "@prisma/client";
import { StudyPage } from "./StudyPage";

const prisma = new PrismaClient()

export default async function Page() {
    let cards = await get_cards(3);

    let reqCallback = async () => {
        await get_cards(2);
    }

    return <StudyPage data={cards} />;
}

export async function get_cards(amount: number): Promise<Sentence[]> {
    // TODO: Make user-specific, deck-specific

    let card = await prisma.sentence.findMany({ take: amount })
        .then(async (card) => {
            await prisma.$disconnect();
            console.log(card);
            return card;
        })
        .catch(async (e) => {
            await prisma.$disconnect();
            console.error(e);
            process.exit(1);
        });

    return card;
}