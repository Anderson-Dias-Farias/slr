import { useEffect, useState } from "react";

interface UseCounterAnimationProps {
  targetValue: number;
  duration?: number;
  startDelay?: number;
  shouldStart?: boolean;
}

export function useCounterAnimation({
  targetValue,
  duration = 2000,
  startDelay = 0,
  shouldStart = true,
}: UseCounterAnimationProps) {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!shouldStart) return;

    const timer = setTimeout(() => {
      setIsAnimating(true);
      const startTime = Date.now();
      const startValue = 0;

      const updateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Função de easing para suavizar a animação
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        const currentValue = Math.floor(
          startValue + targetValue * easeOutQuart
        );
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(targetValue);
          setIsAnimating(false);
        }
      };

      requestAnimationFrame(updateCount);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [targetValue, duration, startDelay, shouldStart]);

  return { count, isAnimating };
}
