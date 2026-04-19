'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SplashScreen, RouteTransitionLoader } from '@/components/loaders';
import CountrySelector from '@/components/country-selector';

export default function RootClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(true);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [showRouteTransition, setShowRouteTransition] = useState(false);
  const [previousPathname, setPreviousPathname] = useState<string | null>(null);

  // Handle initial splash screen and country selector
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
      
      // Check if user has already selected a country
      const hasSelectedCountry = localStorage.getItem('selectedCountry');
      if (!hasSelectedCountry) {
        // Small delay before showing country modal
        setTimeout(() => {
          setShowCountryModal(true);
        }, 300);
      }
    }, 3000);

    return () => clearTimeout(splashTimer);
  }, []);

  // Handle route transitions
  useEffect(() => {
    if (previousPathname && previousPathname !== pathname) {
      setShowRouteTransition(true);
      const transitionTimer = setTimeout(() => {
        setShowRouteTransition(false);
      }, 3000);

      return () => clearTimeout(transitionTimer);
    }

    setPreviousPathname(pathname);
  }, [pathname, previousPathname]);

  return (
    <>
      <SplashScreen isVisible={showSplash} />
      <RouteTransitionLoader show={showRouteTransition} />
      {/* Country modal will be shown by CountrySelector component */}
      {children}
    </>
  );
}
