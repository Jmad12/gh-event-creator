import cardFront from './resources/city/City - Front.jpg';
import cardBack from './resources/city/City - Back.jpg';
import { Card } from './CardType';

export default function CardCanvas(props: { card : Card}){
    return (
        <div className="flex gap-1 justify-around flex-wrap">
            <div><img className="mx-auto my-auto" src={cardFront}></img></div>
            <div><img className="mx-auto my-auto" src={cardBack}></img></div>
        </div>
    )
}