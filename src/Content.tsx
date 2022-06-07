import { MenuIcon } from "@heroicons/react/outline";
import CardCanvas from "./CardCanvas";
import { CardForm } from "./CardForm";
import CardImage from "./CardImage";
import { Card } from "./CardType";
import logo from './resources/logo/logo192.png'

export default function Content(props: { setOpen: (arg0: boolean) => void; activeCard: Card; modifyActiveCard: (arg0: any) => void; }){
    return(
        <div className="container mx-auto flex-initial flex-col justify-center content-evenly h-screen ">
            <div className="flex justify-between py-3 mx-4">
                <img src={logo} className="h-10 w-10"></img>
                <button
                    type="button"
                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white "
                    onClick={() => props.setOpen(true)}
                >
                    <span className="sr-only">Close panel</span>
                    <MenuIcon className="h-10 w-10 " aria-hidden="true" />
                </button>
            </div>
            <CardForm activeCard={props.activeCard} modifyActiveCard={props.modifyActiveCard}></CardForm>
            <CardImage card={props.activeCard}></CardImage>
        </div>
    );
}