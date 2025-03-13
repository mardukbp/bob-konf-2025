export const tileColors: {[key: number]: string} = {
  0: '#cdc1b4',
  2: '#eee4da',
  4: '#ede0c8',
  8: '#f2b179',
  16: '#f59563',
  32: '#f67c5f',
  64: '#f65e3b',
  128: '#edcf72',
  256: '#edcc61',
  512: '#edc850',
  1024: '#edc53f',
  2048: '#edc22e'
};

export const initialGrid = [
  [4, 0, 0, 0],
  [2, 2, 0, 0],
  [8, 4, 0, 2],
  [16, 32, 64, 128]
];

const rotateGridClockwise = (grid: number[][]): number[][] => {
  return grid[0].map(
    (_, colIndex) => grid.map(
      (row) => row[colIndex]
    ).reverse()
  );
}

const rotateGridCounterClockwise = (grid: number[][]): number[][] => {
  return rotateGridClockwise(rotateGridClockwise(rotateGridClockwise(grid)));
}

export const slideGridLeft = (grid: number[][]): number[][] => {
  return grid.map(row => slideRowLeft(row));
}

export const slideGridUp = (grid: number[][]): number[][] => {
  return rotateGridClockwise(
    rotateGridCounterClockwise(grid).map(row => slideRowLeft(row))
  );
}

export const slideGridRight = (grid: number[][]): number[][] => {
  return grid.map(row => slideRowLeft(row.reverse()).reverse());
}

export const slideGridDown = (grid: number[][]): number[][] => {
  return rotateGridCounterClockwise(
    rotateGridClockwise(grid).map(row => slideRowLeft(row))
  );
}

const slideRowLeft = (row: number[]): number[] => {
  const rowAfterSlide = addNeighboringNumbers(row);
  return [...rowAfterSlide, ...Array(row.length - rowAfterSlide.length).fill(0)]
}

const addNeighboringNumbers = (numbers: number[]): number[] => {
  const filtered = numbers.filter((value) => !!value);
  const merged: number[] = [];
  for (let i = 0; i < filtered.length; i++) {
    if (filtered[i] === filtered[i + 1]) {
      merged.push(filtered[i] * 2);
      i++;
    } else {
      merged.push(filtered[i]);
    }
  }
  return merged;
}

export const moves = {
  w: slideGridUp,
  a: slideGridLeft,
  s: slideGridDown,
  d: slideGridRight
};
