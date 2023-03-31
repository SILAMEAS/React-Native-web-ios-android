import {useState} from 'react';
export const useLoading = (init?: boolean) => {
  const [isLoading, setLoading] = useState(init ?? false);
  return {isLoading, setLoading};
};
