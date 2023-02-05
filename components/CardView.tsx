import { useState } from "react";

export type Card = {
    front: string,
    back: string,
}

type CardViewProps = {
    card: Card,
    onSuccess: () => void;
    onFailure: () => void;
}

const CardView = ({ card, onSuccess, onFailure }: CardViewProps) => {
    let [flipped, setFlipped] = useState(false)

    const onFlip = () => {
        setFlipped(!flipped)
    }

    const onSuccessClick = () => {
        onSuccess();
        onFlip();
    }

    const onFailureClick = () => {
        onFailure();
        onFlip();
    }

    return (
        <div className="flex flex-col bg-base-200 w-fit h-fit rounded-xl shadow-xl text-center">
            <div className="card-body items-center">
                <h1 className="card-title text-4xl text-center">
                    {card.front}
                </h1>
                {flipped
                    ? <h2 className="card-content text-center"> {card.back} </h2>
                    : <button onClick={onFlip} className="btn w-28 btn-secondary btn-outline"> {`flip`} </button>
                }
                {flipped && <div className="divider"></div>}
                {flipped && (
                    <div className="card-actions justify-between w-full">
                        <button onClick={onFailureClick} className="btn w-24 btn-outline btn-error">Miss</button>
                        <button onClick={onSuccessClick} className="btn w-24 btn-outline btn-success">Got it</button>
                    </div>
                )}
            </div>

        </div>
    );
}

export default CardView;