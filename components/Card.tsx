'use client';

import { useState } from "react";

export type CardData = {
    front?: string;
    back?: string;
};

type CardViewProps = {
    data: CardData;
    onSuccess: () => void;
    onFailure: () => void;
};

const CardView = ({ data, onSuccess, onFailure }: CardViewProps) => {
    let [flipped, setFlipped] = useState(false);

    const flip = () => {
        setFlipped(!flipped)
    };

    const onSuccessClick = () => {
        onSuccess();
        flip();
    };

    const onFailureClick = () => {
        onFailure();
        flip();
    };

    let card = flipped ? (
        <>
            <h1 className="card-title text-4xl text-center">{data.front}</h1>
            <h2 className="card-content text-center"> {data.back} </h2>
            <div className="divider"></div>
            <div className="card-actions justify-between w-full">
                <button onClick={onFailureClick} className="btn w-24 btn-outline btn-error" >
                    Miss
                </button>
                <button onClick={onSuccessClick} className="btn w-24 btn-outline btn-success" >
                    Got it
                </button>
            </div>
        </>
    ) : (
        <>
            <h1 className="card-title text-4xl text-center">{data.front}</h1>
            <button onClick={flip} className="btn w-28 btn-primary btn-outline">
                {`flip`}
            </button>
        </>
    );

    return (
        <div className="flex flex-col bg-base-200 w-fit h-fit rounded-xl shadow-xl text-center">
            <div className="card-body items-center">
                {card}
            </div>
        </div>
    );
};

export default CardView;
