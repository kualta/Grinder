import { CardData } from "@/components/CardView";
import { StudyPage } from "./StudyPage";

export default async function Page() {
    return <StudyPage />
}

export async function fetch_next_card(): Promise<CardData> {
    // FIXME
    let response = await fetch("api/get_card")
    let card = await response.json() as CardData
    console.log(card)

    return card
}