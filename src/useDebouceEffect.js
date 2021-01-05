import { useEffect, useCallback } from "react";

const useDebounceEffect = (fetch, deps, delay = 300) => {
  const callbactFun = useCallback(fetch, deps);
  useEffect(() => {
    const timeout = setTimeout(callbactFun, delay);
    return () => clearInterval(timeout);
  }, [callbactFun, delay]);
};

export default useDebounceEffect;
