import CardView, { Card } from "@/components/card";
import Layout from "@/components/layout";
import { useCallback, useEffect, useState } from "react";

interface StudyProps {

}

const Study = (props: StudyProps) => {
    let [currentCard, setCurrentCard] = useState({ front: "front", back: "back" } as Card)
    let [nextCard, setNextCard] = useState({} as Card)

    const onSuccess = useCallback(async () => {
        // TODO: Record success
        setCurrentCard(nextCard)
        setNextCard(await fetch_next_card())
    }, [nextCard])

    const onFailure = useCallback(async () => {
        // TODO: Record failure
        setCurrentCard(nextCard)
        setNextCard(await fetch_next_card())
    }, [nextCard])


    return (
        <Layout>
            <div className="flex flex-col h-screen items-center justify-center">
                <CardView card={currentCard} onSuccess={onSuccess} onFailure={onFailure} />
            </div>
        </Layout>
    );
}

async function fetch_next_card(): Promise<Card> {
    let response = await fetch("api/get_card")
    let card = await response.json() as Card
    console.log(card)

    return card
}

export default Study;