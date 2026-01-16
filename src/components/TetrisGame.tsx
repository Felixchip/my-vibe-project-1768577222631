import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTetris } from '@/hooks/useTetris';
import { GameBoard } from './GameBoard';
import { NextPiecePreview } from './NextPiecePreview';
import { HoldPiecePreview } from './HoldPiecePreview';
import { ScorePanel } from './ScorePanel';
import { GameControls } from './GameControls';
import { TouchControls } from './TouchControls';
import { SpeedSlider } from './SpeedSlider';
import { DifficultySelector } from './DifficultySelector';
export const TetrisGame = () => {
  const {
    board,
    nextPiece,
    holdPiece,
    canHold,
    score,
    level,
    lines,
    gameOver,
    isPlaying,
    isPaused,
    speedMultiplier,
    setSpeedMultiplier,
    difficulty,
    setDifficulty,
    movePiece,
    rotatePiece,
    hardDrop,
    holdCurrentPiece,
    startGame,
    togglePause,
  } = useTetris();

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isPlaying || gameOver) return;
    
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        movePiece(-1, 0);
        break;
      case 'ArrowRight':
        e.preventDefault();
        movePiece(1, 0);
        break;
      case 'ArrowDown':
        e.preventDefault();
        movePiece(0, 1);
        break;
      case 'ArrowUp':
      case ' ':
        e.preventDefault();
        rotatePiece();
        break;
      case 'Enter':
        e.preventDefault();
        hardDrop();
        break;
      case 'c':
      case 'C':
        e.preventDefault();
        holdCurrentPiece();
        break;
      case 'p':
      case 'P':
      case 'Escape':
        e.preventDefault();
        togglePause();
        break;