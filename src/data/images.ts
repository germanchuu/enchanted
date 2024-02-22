import { url } from "inspector";

interface Image {
  url: string;
  name: string;
}

export const images: Image[] = [
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295222/Enchanted/Sushi.jpg",
    name: "Sushi",
  },
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295220/Enchanted/Tulipanes%20%28Momento%20Can%C3%B3nico%29.jpg",
    name: "Tulipanes (Momento Canónico)",
  },
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295220/Enchanted/Tontos%20Enamorados.jpg",
    name: "Tontos Enamorados",
  },
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295219/Enchanted/Tontos%20Enamorados%20y%20un%20Mango.jpg",
    name: "Tontos Enamorados y un Mango",
  },
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295219/Enchanted/Formalizados.jpg",
    name: "Formalizados",
  },
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295219/Enchanted/Despu%C3%A9s%20del%20Juzgado.jpg",
    name: "Después del Juzgado",
  },
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295219/Enchanted/San%20Valent%C3%ADn.jpg",
    name: "San Valentín",
  },
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295219/Enchanted/Primer%20Beso.jpg",
    name: "Primer Beso",
  },
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295219/Enchanted/Enero%202023.jpg",
    name: "La bendita foto",
  },
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295218/Enchanted/Caminata.jpg",
    name: "Caminata",
  },
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295218/Enchanted/Picnic.jpg",
    name: "Picnic",
  },
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295218/Enchanted/Salida%20R%C3%A1pida.jpg",
    name: "Salida Rápida",
  },
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295217/Enchanted/Primera%20Salida.jpg",
    name: "Primera Salida",
  },
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295217/Enchanted/Despedida%20Rom%C3%A1ntica.jpg",
    name: "Despedida Romántica",
  },
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295217/Enchanted/Cine%20Juntos.jpg",
    name: "Cine Juntos",
  },
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295217/Enchanted/Reencuentro%20Inesperado.jpg",
    name: "Reencuentro Inesperado",
  },
  {
    url: "https://res.cloudinary.com/dffwuto95/image/upload/v1708295217/Enchanted/Corso%20%28Momento%20Can%C3%B3nico%29.jpg",
    name: "Corso (Momento Canónico)",
  },
];

export const data: Image[] = [
  { url: "", name: "Objeto 1" },
  { url: "", name: "Objeto 2" },
  { url: "", name: "Objeto 3" },
  { url: "", name: "Objeto 4" },
  { url: "", name: "Objeto 5" },
  { url: "", name: "Objeto 6" },
];

export function shuffleArray() {
  const shuffledArray = [...images];

  // Algoritmo de Fisher-Yates
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
