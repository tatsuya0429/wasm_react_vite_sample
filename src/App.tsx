import { useEffect, useRef } from 'react'
import './App.css'
import { Universe } from "../rsw/pkg"

function App() {
  const universe = Universe.new();
  const contentRef = useRef<HTMLDivElement|null>(null);
  const animationRef = useRef<number>(0);
  const loop = () => {
    if (contentRef.current !== null) {
      contentRef.current.textContent = universe.render();
    universe.tick();
    animationRef.current = requestAnimationFrame(loop)
    }
  }

  useEffect(() => {
    loop();
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <>
      <h2>Life Game</h2>
      <div ref={contentRef}></div>
    </>
  )
}

export default App
