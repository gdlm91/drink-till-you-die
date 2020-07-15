export const MAX_POSITIONS = 73; // last one is finish line

export const generateRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getNextPosition = (currentPosition: number, nextCount: number) => {
  const nextPosition = currentPosition + nextCount;
  if (nextPosition < MAX_POSITIONS) {
    return nextPosition;
  }

  // you went over the MAX_POSITIONS... go back :)
  return MAX_POSITIONS - nextPosition + MAX_POSITIONS;
};
