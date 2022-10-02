import { Dialog, Transition } from "@headlessui/react";
import React, { FunctionComponent, useState, Fragment } from "react";
import UP from "../public/up-button.png";
import Image from "next/image";

export interface EmojiCardProps {
  code?: string;
  emoji: string;
  name: string;
  category?: string;
  group?: string;
}

const EmojiCard: FunctionComponent<EmojiCardProps> = ({
  code,
  emoji,
  name,
  category,
  group,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#c5c6e9] p-2 rounded-xl shadow-md flex flex-col items-center gap-2">
      <span
        className="text-4xl md:text-6xl mb-2 pt-3"
        role={"img"}
        aria-label={emoji}
      >
        {emoji}
      </span>
      <h4 className="font-bold text-gray-800 h-10">{name}</h4>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="text-blue-500 pb-3 pt-5 border-none"
      >
        <Image
          src={UP.src}
          alt="Landscape picture"
          width={30}
          height={30}
          className="w-10 h-10 sm:w-8 sm:h-8 bg-[#2f3288] transition-all duration-500 hover:bg-[#a645be] border-spacing-20 rounded-full p-1"
        />
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-[#1a0553]"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg text-center font-medium leading-6 text-gray-900"
                >
                  {name.toUpperCase()}
                </Dialog.Title>
                <div className="mt-2">
                  <div className="flex justify-center">
                    <span
                      className=" text-8xl md:text-9xl mb-4 "
                      role={"img"}
                      aria-label={emoji}
                    >
                      {emoji}
                    </span>
                  </div>
                  <p className="text-md text-gray-500 mb-2">
                    {" "}
                    <span className="font-bold">Code:</span> {code}{" "}
                  </p>
                  <p className="text-md text-gray-500 mb-2">
                    {" "}
                    <span className="font-bold">Category:</span> {category}{" "}
                  </p>
                  <p className="text-md text-gray-500 mb-2">
                    {" "}
                    <span className="font-bold">Group:</span> {group}{" "}
                  </p>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default EmojiCard;
