import { DeclareKeyword, Statement } from "typescript";
import { Card } from "./CardType";

export function CardForm(props: { modifyActiveCard: (arg0: any) => void; activeCard: any; }){
    
    function handleChange(e : React.ChangeEvent<HTMLTextAreaElement>){
        const { name, value } = e.target;
        props.modifyActiveCard({
            ...props.activeCard,
            [name]: value,
        })
    }
    function handleChangeNumber(e : React.ChangeEvent<HTMLInputElement>){
        const { name, value } = e.target;
        props.modifyActiveCard({
            ...props.activeCard,
            [name]: value,
        })
    }
    return(
        <div className="flex justify-evenly flex-wrap gap-5 my-2">
            <label> Number:
            <input name='number' id='number' onChange={handleChangeNumber} value={props.activeCard.number}></input>
            </label>
            <label> Front Text:
            <textarea name='frontText' id='frontText' onChange={handleChange} value={props.activeCard.frontText}></textarea>
            </label>
            <label> Back Text A:
            <textarea name='backTextA' id='backTextA' onChange={handleChange} value={props.activeCard.backTextA}></textarea>
            </label>
            <label> Back Text B:
            <textarea name='backTextB' id='backTextB' onChange={handleChange} value={props.activeCard.backTextB}></textarea>
            </label>
        </div>
    );
}