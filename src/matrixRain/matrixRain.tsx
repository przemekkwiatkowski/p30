// components/MatrixRain.tsx
import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas2Ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvas2 = canvas2Ref.current;

    if (!canvas || !canvas2) return;

    const ctx = canvas.getContext('2d');
    const ctx2 = canvas2.getContext('2d');

    if (!ctx || !ctx2) return;

    let cw = window.innerWidth;
    let ch = window.innerHeight;
    const charArr = ['p', 'y', 'c', 'h', 'u'];
    const fontSize = 10;
    let maxColums = cw/fontSize;

    const updateCanvasSize = () => {
      cw = window.innerWidth;
      ch = window.innerHeight;
      maxColums = cw/fontSize;

      canvas.width = canvas2.width = cw;
      canvas.height = canvas2.height = ch;
    };

    // Inicjalna konfiguracja rozmiaru
    updateCanvasSize();

    // Nasłuchiwanie na zmianę rozmiaru okna
    window.addEventListener('resize', updateCanvasSize);

    class Point {
      x: number;
      y: number;
      value?: string;
      speed?: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
      }

      draw(context: CanvasRenderingContext2D) {
        this.value = charArr[randomInt(0, charArr.length-1)].toUpperCase();
        this.speed = randomFloat(1,5);

        if (ctx2) { // sprawdzamy czy ctx2 istnieje
          ctx2.fillStyle = "rgba(255,255,255,0.8)";
          ctx2.font = `${fontSize}px san-serif`;
          ctx2.fillText(this.value, this.x, this.y);
        }

        context.fillStyle = "#0F0";
        context.font = `${fontSize}px san-serif`;
        context.fillText(this.value, this.x, this.y);

        this.y += this.speed;
        if(this.y > ch) {
          this.y = randomFloat(-100,0);
          this.speed = randomFloat(2,5);
        }
      }
    }

    function randomInt(min: number, max: number) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    function randomFloat(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const fallingCharArr: Point[] = [];

    for(let i = 0; i < maxColums; i++) {
      fallingCharArr.push(new Point(i*fontSize, randomFloat(-500,0)));
    }

    function update() {
      if (!ctx || !ctx2) return;

      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0,0,cw,ch);

      ctx2.clearRect(0,0,cw,ch);

      let i = fallingCharArr.length;

      while (i--) {
        fallingCharArr[i].draw(ctx);
      }

      requestAnimationFrame(update);
    }

    update();

    // Cleanup
    return () => {
      // możesz dodać czyszczenie jeśli jest potrzebne
    };
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <canvas
        ref={canvas2Ref}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default MatrixRain;