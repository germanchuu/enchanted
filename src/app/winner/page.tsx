"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/card";
import LoadingSpin from "@/components/loadingSpin";
import { resetValues } from "@/game/tournamentSelector";

interface Image {
  url: string;
  name: string;
}

export default function Winner() {
  const [winner, setWinner] = useState<Image | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stringWinner = localStorage.getItem("winner");
    if (stringWinner) {
      const parsedWinner: Image = JSON.parse(stringWinner);
      setWinner(parsedWinner);
    }
  }, []);

  const handleRedirect = () => {
    resetValues()    
    router.back()    
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {winner ? (
        <>
          <h1 className="mt-3 font-semibold italic text-2xl">GANADOR:</h1>
          <div className="overflow-y">
            <Card
              key={winner.name}
              name={winner.name}
              url={winner.url}
              onSelect={() => {}}
            />
          </div>
          <button
            className="bg-slate-100 text-gray-700 font-semibold rounded p-3"
            onClick={handleRedirect}
          >
            Volver a jugar
          </button>
        </>
      ) : (
        <LoadingSpin />
      )}
    </div>
  );
}
