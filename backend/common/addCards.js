import Card from "../model/Card.js";

export async function addCards(_data) {
    const newCard = new Card({
        title: _data.title,
        description: _data.description,
        link: _data.link
    });

    const result = newCard.save();

    if(result) {
        return newCard;
    } else {
        return null;
    }
}