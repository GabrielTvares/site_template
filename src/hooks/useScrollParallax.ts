import { useEffect, useState } from "react";

export function useScrollParallax(factor: number = 0.4) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * factor);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [factor]);

  return offset;
}
