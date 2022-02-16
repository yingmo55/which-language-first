import { results } from "../Components/Questions/questions";

export const getRandomAnswer = () => {
  const ents = Object.values(results);
  const result = ents[Math.floor(Math.random() * ents.length)];

  return result;
};
