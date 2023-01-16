import { useState } from "react";

export type Card = {
    front: string,
    back: string,
}

const CardView = (card: Card) => {
    let [flipped, setFlipped] = useState(false)

    const onFlip = () => {
        setFlipped(!flipped)
    }

    const onSuccess = () => {
        setFlipped(false)
    }

    const onFailure = () => {
        setFlipped(false)
    }

    return (
        <div className="card bg-base-200 w-96 rounded-xl shadow-xl text-center">
            <div className="card-body items-center">
                <h1 className="card-title text-4xl text-center">
                    {card.front}
                </h1>
                {flipped
                    ? <h2 className="card-content text-center"> {card.back} </h2>
                    : <button onClick={onFlip} className="btn w-28 btn-secondary btn-outline"> {`flip`} </button>
                }
                {flipped && (
                    <div className="card-actions justify-between w-full">
                        <button onClick={onFailure} className="btn w-24 btn-outline btn-error">Miss</button>
                        <button onClick={onSuccess} className="btn w-24 btn-outline btn-success">Got it</button>
                    </div>
                )}
            </div>

        </div>
    );
}

export default CardView;