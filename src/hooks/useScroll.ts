import { useEffect, useState } from "react";

export const useScroll = (offset = 20) => {
  const [hasReachedEndOfPage, setHasReachedEndOfPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= docHeight - offset) {
        setHasReachedEndOfPage(true);
      } else {
        setHasReachedEndOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return { hasReachedEndOfPage };
};
