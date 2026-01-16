import { useState, useCallback, useEffect, useRef } from 'react';
import { type Difficulty, getBaseSpeedForDifficulty } from '@/components/DifficultySelector';

export type TetrominoType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';

export interface Position {
  x: number;
  y: number;
}

export interface Tetromino {
  type: TetrominoType;
  shape: number[][];
  position: Position;
}

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const TETROMINOES: Record<TetrominoType, number[][]> = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
};

const TETROMINO_COLORS: Record<TetrominoType, string> = {
  I: 'tetro-i',
  O: 'tetro-o',
  T: 'tetro-t',
  S: 'tetro-s',
  Z: 'tetro-z',
  J: 'tetro-j',
  L: 'tetro-l',
};

export type CellType = TetrominoType | null;
export type Board = CellType[][];

const createEmptyBoard = (): Board => {