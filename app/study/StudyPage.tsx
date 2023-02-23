'use client'

import CardView, { CardData } from "@/components/CardView";
import { useCallback, useState } from "react";
import { fetch_next_card } from "./page";

export interface StudyProps {

}

export const StudyPage = (props: StudyProps) => {
    let [currentCard, setCurrentCard] = useState({ front: "front", back: "back" } as CardData);
    let [nextCard, setNextCard] = useState({} as CardData);

    const onSuccess = useCallback(async () => {
        // TODO: Record success
        setCurrentCard(nextCard);
        setNextCard(await fetch_next_card());
    }, [nextCard]);

    const onFailure = useCallback(async () => {
        // TODO: Record failure
        setCurrentCard(nextCard);
        setNextCard(await fetch_next_card());
    }, [nextCard]);


    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <CardView data={currentCard} onSuccess={onSuccess} onFailure={onFailure} />
        </div>
    );
};
