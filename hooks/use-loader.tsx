'use client';

import { useState, useCallback } from 'react';
import FullscreenLoader from '@/components/loaders/fullscreen-loader';
export function useLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('Processing...');
  const [progress, setProgress] = useState<number | undefined>(undefined);

  const show = useCallback((msg = 'Processing...', prog?: number) => {
    setMessage(msg);
    setProgress(prog);
    setIsVisible(true);
  }, []);

  const hide = useCallback(() => {
    setIsVisible(false);
  }, []);

  const setProgressValue = useCallback((value: number) => {
    setProgress(value);
  }, []);

  const updateMessage = useCallback((msg: string) => {
    setMessage(msg);
  }, []);

  const Loader = () => (
    <FullscreenLoader
      isVisible={isVisible}
      message={message}
      progress={progress}
    />
  );

  return {
    show,
    hide,
    setProgress: setProgressValue,
    updateMessage,
    isLoading: isVisible,
    Loader,
  };
}
