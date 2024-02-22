import { data, shuffleArray } from "@/data/images";

interface Image {
  url: string;
  name: string;
}

let objets: Image[] = shuffleArray();
let winners: Image[] = [];
let index: number = 0;
let round: number = 1;

export function resetValues() {
  objets = shuffleArray();
  winners = [];
  index = 0;
  round = 1;
}

export function getTotalRounds(): number {
  return Math.ceil(Math.log2(objets.length));
}

export function getRound() {
  return round;
}

export function getPairImages() {
  if (objets[index * 2 + 1] === undefined) return [objets[index * 2]];
  return [objets[index * 2], objets[index * 2 + 1]];
}

export function processSelected(selected: Image) {
  winners.push(selected);

  if (index < Math.floor(objets.length / 2) - 1) index++;
  else nextRound();

  storageWinner();
}

function setLastIfIsOdd() {
  if (objets.length % 2 != 0) winners.unshift(objets[objets.length - 1]);
}

function nextRound() {
  setLastIfIsOdd();
  objets = winners;
  winners = [];
  index = 0;
  round++;
}

function storageWinner() {
  if (objets.length <= 1) {
    const stringObjet = JSON.stringify(objets[0]);
    localStorage.setItem("winner", stringObjet);
  }
}
