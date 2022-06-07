import { useState } from 'react';
import './App.css';
import Content from './Content';
import Sidebar from './Sidebar';
import {Card, CardType} from './CardType';


function App() {
  const [open, setOpen] = useState(true)
  const [cards, setCards] = useState([new Card()])
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  function modifyActiveCard(newCard : Card){
    let newCards = [...cards];
    newCards[activeCardIndex] = newCard;
    setCards(newCards);
  }
  return (
    <div className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900" >
      <Content activeCard={cards[activeCardIndex]} modifyActiveCard={modifyActiveCard} setOpen={setOpen}></Content>
      <Sidebar open={open} setOpen={setOpen} cards={cards} setCards={setCards} setActiveCardIndex={setActiveCardIndex}></Sidebar>
    </div>
  );
}

export default App;
