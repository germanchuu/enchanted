"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/card";
import LoadingSpin from "@/components/loadingSpin";
import { getPairImages, getRound, processSelected, totalRounds } from "@/game/tournamentSelector";

interface Image {
  url: string;
  name: string;
}

export default function Home() {
  const [objets, setObjets] = useState<Image[]>([]);
  const [round, setRound] = useState<number>(getRound());
  const router = useRouter()

  useEffect(() => {
    setObjets(getPairImages)
  }, [])

  useEffect(() => {
    if (objets.length === 1) {
      router.push('/winner')      
    }
  }, [objets])

  const handleObjectSelection = (selected: Image) => {            
    processSelected(selected)
    setObjets(getPairImages)
    setRound(getRound)          
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {objets.length > 0 && objets.length > 1  ? (
        <>
          <h1 className="mt-3 font-semibold italic text-2xl">RONDA {round} / {totalRounds}</h1>
          <h1 className="mt-3 font-semibold italic text-2xl">
            ¿QUÉ SALIDA TE GUSTÓ MÁS?
          </h1>
          <div className="overflow-y">
            <Card
              key={objets[0].name}
              name={objets[0].name}
              url={objets[0].url}
              onSelect={() => handleObjectSelection(objets[0])}
            />            
            <Card
              key={objets[1].name}
              name={objets[1].name}
              url={objets[1].url}
              onSelect={() => handleObjectSelection(objets[1])}
            />
          </div>
        </>
      ) : (
        <LoadingSpin />                
      )}
    </div>
  );
}
