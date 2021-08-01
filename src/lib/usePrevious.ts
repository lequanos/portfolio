import { useRef, useEffect } from 'react';

const usePrevious = (value: number | undefined) => {
  const ref = useRef<number | undefined>();
  useEffect(() => {
    if (ref.current) {
      ref.current = value;
    };
  });
  return ref.current;
};

export default usePrevious;
