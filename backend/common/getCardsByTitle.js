import Card from "../model/Card.js";

export async function getCardsByTitle(_title) {
    const cardData = await Card.findOne({
        title: _title
    });

    if(cardData) {
        return cardData;
    } else {
        return null;
    }
}