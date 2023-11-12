import { useState, useEffect } from 'react';

const boxSize = 20;

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [direction, setDirection] = useState('RIGHT');

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const moveSnake = () => {
    // Logic to move the snake based on the current direction
    // Update the snake state
  };

  const drawSnake = () => {
    // Logic to draw the snake on the canvas
  };

  useEffect(() => {
    const gameLoop = setInterval(() => {
      moveSnake();
      drawSnake();
    }, 100); // Adjust the speed of the game by changing the interval

    return () => clearInterval(gameLoop);
  }, [snake]);

  return (
    <div className="App">
      <canvas
        id="snakeCanvas"
        width={boxSize * 20}
        height={boxSize * 20}
        style={{ border: '1px solid #000' }}></canvas>
    </div>
  );
};

export default SnakeGame;
