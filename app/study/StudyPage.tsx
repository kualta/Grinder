'use client'

import { useState } from "react";
import CardView, { CardData } from "../../components/Card";

type StudyPageProps = {
    data: CardData[],
    // reqCallback: () => void,
}

export const StudyPage = ({ data }: StudyPageProps) => {
    let [idx, setIdx] = useState(1);
    let [card, setCard] = useState(data[0]);

    // record success
    const onSuccess = () => {
        if (data.length - 1 > idx) { setIdx(idx + 1); }
        // else { reqCallback(); }

        console.log(idx);
        setCard(data[idx]);
    };

    // record failure
    const onFailure = () => {
        if (data.length - 1 > idx) { setIdx(idx + 1); }
        // else { reqCallback(); }

        setCard(data[idx]);
    };

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <CardView data={card} onSuccess={onSuccess} onFailure={onFailure} />
        </div>
    );
};
