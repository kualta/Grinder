'use client'

import CardView, { CardData } from "../../components/Card";

type StudyPageProps = {
    data: CardData,
}

export const StudyPage = ({ data }: StudyPageProps) => {
    // let [nextCard, setNextCard] = useState({} as CardData);
    // let [currentCard, setCurrentCard] = useState({} as CardData);

    const onSuccess = async () => {
        // record success
    };

    const onFailure = async () => {
        // record failure
    };

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <CardView data={data} onSuccess={onSuccess} onFailure={onFailure} />
        </div>
    );
};
