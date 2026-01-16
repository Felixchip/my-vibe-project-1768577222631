import { forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface GameControlsProps {
  isPlaying: boolean;
  isPaused: boolean;
  gameOver: boolean;
  onStart: () => void;
  onTogglePause: () => void;
}

export const GameControls = forwardRef<HTMLDivElement, GameControlsProps>(
  ({ isPlaying, isPaused, gameOver, onStart, onTogglePause }, ref) => {
    return (
      <div ref={ref} className="flex flex-col gap-2 sm:gap-3">
        {!isPlaying || gameOver ? (
          <Button 
            onClick={onStart} 
            size="lg"
            className="w-full font-display uppercase tracking-normal min-h-[40px] sm:min-h-[48px] py-2 px-3 text-[8px] sm:text-[10px] retro-btn retro-btn-primary touch-manipulation whitespace-nowrap"
          >
            <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
            <span className="truncate">{gameOver ? 'Again' : 'Start'}</span>
          </Button>
        ) : (
          <Button 
            onClick={onTogglePause} 
            variant="outline"
            size="lg"
            className="w-full font-display uppercase tracking-normal min-h-[40px] sm:min-h-[48px] py-2 px-3 text-[8px] sm:text-[10px] retro-btn text-primary hover:text-primary touch-manipulation whitespace-nowrap"
          >
            {isPaused ? (
              <>
                <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                <span className="truncate">Resume</span>
              </>
            ) : (
              <>
                <Pause className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                <span className="truncate">Pause</span>
              </>
            )}
          </Button>
        )}
        
        {isPlaying && !gameOver && (
          <Button 
            onClick={onStart} 
            variant="ghost"
            size="sm"
            className="w-full font-display uppercase tracking-normal text-muted-foreground hover:text-foreground retro-btn min-h-[32px] sm:min-h-[40px] py-1.5 px-2 text-[7px] sm:text-[8px] touch-manipulation whitespace-nowrap"
          >
            <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-2 flex-shrink-0" />
            <span className="truncate">Restart</span>
          </Button>
        )}
      </div>
    );
  }
);

GameControls.displayName = 'GameControls';
