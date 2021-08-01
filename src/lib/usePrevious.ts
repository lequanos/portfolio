import { useRef, useEffect } from 'react';

const usePrevious = (value: number) => {
  const ref = useRef<number>();
  useEffect(() => {
    if (!ref.current) throw new Error('ref non désigné');
    ref.current = value;
  });
  return ref.current;
};

export default usePrevious;
