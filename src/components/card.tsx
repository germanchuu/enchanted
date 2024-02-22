"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import SelectedPing from "@/components/selectedPing";

interface ImageProp {
  url: string;
  name: string;
  onSelect: () => void;  
}

const Card: React.FC<ImageProp> = ({ url, name, onSelect }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false)

  const handlerOnClik = (onSelect: () => void) => {
    onSelect()
    setIsSelected(true)
    setTimeout(() => {
      setIsSelected(false)
    }, 500);
  }

  return (
    <div
      className={`bg-purple-100 bg-opacity-80 rounded-lg border-2 border-purple-800 border-opacity-60 w-[300px] h-[350px] grid gap-4 grid-rows-4 m-3 cursor-pointer relative`}
      onClick={() => handlerOnClik(onSelect)}
    >
      <div className="row-span-3 m-1 rounded-lg bg-slate-900 relative">
        <div className="aspect-w-3 aspect-h-4">
          <Image
            src={url != '' ? url : 'https://res.cloudinary.com/dffwuto95/image/upload/v1708532539/Enchanted/placeholder.jpg'}
            alt={name}
            quality={100}
            layout="fill"
            objectFit="cover"
            className="rounded"
            priority={true}
          />
        </div>
      </div>
      <div className="flex items-start justify-center">
        <span className="text-slate-900 font-bold text-xl text-center">{name}</span>
      </div>
      <div className='absolute left-[-25px] h-full flex flex-col gap-3 justify-center'>   
        {/* {isSelected && (
          <SelectedPing/>
        )}              */}
      </div>
    </div>
  );
};

export default Card;
