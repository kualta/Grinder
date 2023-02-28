'use server'

import { PrismaClient, Sentence } from "@prisma/client";
import { CardData } from "../../components/Card";
import { StudyPage } from "./StudyPage";

const prisma = new PrismaClient()

export default async function Page() {

    let card = await get_next_card();

    return <StudyPage data={card} />;
}

export async function get_next_card(): Promise<CardData> {
    const sentence = await fetch_sentence()
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

    let card: CardData = {
        front: sentence?.front,
        back: sentence?.back,
    };

    return card;
}

async function fetch_sentence(): Promise<Sentence | null> {
    // TODO: Make user-specific, deck-specific

    let card = await prisma.sentence.findFirst();

    return card;
}