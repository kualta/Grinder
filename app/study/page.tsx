'use server'

import { Sentence } from "@prisma/client";
import { CardData } from "../../components/Card";
import prisma from "../db";
import { StudyPage } from "./StudyPage";

export default async function Page() {
    

    return <StudyPage />;
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
            return null;
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