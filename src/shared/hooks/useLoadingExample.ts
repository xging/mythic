import { useLoading } from '@/shared/contexts';
// import { useEffect } from 'react';

/**
 * Example component showing how to use the loading screen
 *
 * Usage:
 * 1. Import useLoading hook from @/shared/contexts
 * 2. Call startLoading() when you start loading data
 * 3. Call stopLoading() when loading is complete
 *
 * Example:
 * ```
 * const { startLoading, stopLoading } = useLoading();
 *
 * useEffect(() => {
 *   startLoading();
 *   fetchData().then(() => stopLoading());
 * }, []);
 * ```
 */

export const useLoadingExample = () => {
  const { startLoading, stopLoading, setLoading } = useLoading();

  // Example: Show loading for 2 seconds on component mount
  // Uncomment the useEffect below to enable the example
  /*
  useEffect(() => {
    const showLoadingExample = async () => {
      startLoading();
      // Simulate loading...
      await new Promise((resolve) => setTimeout(resolve, 2000));
      stopLoading();
    };

    showLoadingExample();
  }, [startLoading, stopLoading]);
  */

  return {
    startLoading,
    stopLoading,
    setLoading,
  };
};
