export enum CardType{
    CityEvent,
    RoadEvent,
}
export class Card {
    number: string = "0";
    type: CardType= CardType.CityEvent;
    frontText: string = "This is your Basic Front Text"; 
    backTextA : string= "This is your Basic Back Text A"; 
    backTextB: string= "This is your Basic Back Text B"; 
}