'use client'

import { use, useState } from "react";
import CardView, { CardData } from "../../components/Card";
import { get_next_card } from "./page";

type StudyPageProps = {
    onSuccess: () => void,
    onFailure: () => void,
}

export const StudyPage = () => {
    // let [nextCard, setNextCard] = useState({} as CardData);
    let [currentCard, setCurrentCard] = useState({} as CardData);

    let card = use(get_next_card());

    const onSuccess = async () => {
        setCurrentCard(card);
        // record success
    };

    const onFailure = async () => {
        // record failure
    };

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <CardView data={currentCard} onSuccess={onSuccess} onFailure={onFailure} />
        </div>
    );
};
