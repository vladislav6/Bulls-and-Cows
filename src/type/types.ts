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
