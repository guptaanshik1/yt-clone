import React from "react";

const useIntersectionObserver = (
  fetcher: () => void,
  hasNext: boolean | undefined,
  ref: any
) => {
  React.useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetcher();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current.lastElementChild!);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current.lastElementChild!);
      }
    };
  }, [fetcher, hasNext]);
};

export default useIntersectionObserver;
