/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Card } from './CardType'

export default function Sidebar(props: { setCards: (arg0: any[]) => void; cards: Card[]; open: boolean | undefined; setOpen: (arg0: boolean) => void; setActiveCardIndex: (arg0: number) => void }) {
  function handleCreateNewCard(){
    props.setCards([...props.cards, new Card()])
  }

  function handleClickOnCard(index: number){
    props.setActiveCardIndex(index);
    props.setOpen(false);
  }
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={() => props.setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-fit max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => props.setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-center"> Gloomhaven Event Creator </Dialog.Title>
                    </div>
                    <div className="relative my-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div className="h-full gap-2 border-gray-200 flex flex-col content-center overflow-auto" aria-hidden="true" >
                          <div className="border-2 border-dashed rounded-md"><button type="button" className="mx-auto flex justify-center rounded-md hover:text-white" onClick={handleCreateNewCard}>Create a new card</button></div>
                          {props.cards.map((card : Card, index:number)=>
                            <div className="border-2 border-dashed rounded-md" key={index}>
                              <button type="button" className="mx-auto flex justify-center rounded-md hover:text-white" onClick={()=>handleClickOnCard(index)}>{card.number}</button>
                            </div>
                          )}
                        </div>
                        <div>
                          <button type="button" className="mx-auto flex justify-end rounded-md hover:text-white">Export</button>
                        </div>
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
