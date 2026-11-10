export type bullsAndCows = {
  bulls: number;
  cows: number;
};

export type gameOptions = {
  length: number;
  base: number;
  secret: string | undefined;
  guess?: string;
};

export type historyType = {
  guess: string;
  result: bullsAndCows;
};

export type winsType = {
  steps: number;
  time: string;
  length: number;
  base: number;
  secret: string;
};

export type storage = {
  history: historyType[];
  wins: winsType[];
};
