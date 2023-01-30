import { useRef, useState, useEffect } from "react";

export type optionsType = {
  root: null | HTMLElement;
  rootMargin: string;
  threshold: number;
};

const useObserver = (options: optionsType) => {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);
    const containerRefClone = containerRef.current;

    return () => {
      if (containerRefClone) observer.unobserve(containerRefClone);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

export default useObserver;
