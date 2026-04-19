'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface Country {
  code: string;
  name: string;
  currency: string;
  symbol: string;
  flag: string;
  rate: number;
}

interface CurrencyContextType {
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
  convertPrice: (priceUSD: number) => string;
}

const defaultCountry: Country = {
  code: 'US',
  name: 'United States',
  currency: 'USD',
  symbol: '$',
  flag: '🇺🇸',
  rate: 1,
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [selectedCountry, setSelectedCountryState] = useState<Country>(defaultCountry);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved country from localStorage
    const saved = localStorage.getItem('selectedCountry');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSelectedCountryState(parsed);
      } catch (e) {
        console.error('Failed to parse saved country:', e);
      }
    }
  }, []);

  const setSelectedCountry = useCallback((country: Country) => {
    console.log('Setting country to:', country.name, country.currency); // Debug log
    setSelectedCountryState(country);
    localStorage.setItem('selectedCountry', JSON.stringify(country));
  }, []);

  const convertPrice = useCallback((priceUSD: number): string => {
    if (!mounted) return `$${priceUSD}`;
    
    console.log('Converting price:', priceUSD, 'with rate:', selectedCountry.rate); // Debug log
    const converted = priceUSD * selectedCountry.rate;
    
    // Format based on currency - no decimals for certain currencies
    if (['JPY', 'KRW', 'IDR', 'VND', 'CLP', 'HUF', 'COP', 'NGN'].includes(selectedCountry.currency)) {
      return `${selectedCountry.symbol}${Math.round(converted).toLocaleString()}`;
    }
    
    // For currencies with decimals
    return `${selectedCountry.symbol}${converted.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }, [mounted, selectedCountry]);

  return (
    <CurrencyContext.Provider value={{ selectedCountry, setSelectedCountry, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
