'use client';

import { useCurrency } from '@/contexts/currency-context';

export default function CurrencyDebug() {
  const { selectedCountry, convertPrice } = useCurrency();
  
  return (
    <div className="fixed bottom-4 left-4 bg-black/90 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="font-bold mb-2">Currency Debug:</div>
      <div>Country: {selectedCountry.name}</div>
      <div>Code: {selectedCountry.code}</div>
      <div>Currency: {selectedCountry.currency}</div>
      <div>Symbol: {selectedCountry.symbol}</div>
      <div>Rate: {selectedCountry.rate}</div>
      <div className="mt-2 pt-2 border-t border-gray-600">
        <div>Test $100 = {convertPrice(100)}</div>
        <div>Test $1000 = {convertPrice(1000)}</div>
      </div>
    </div>
  );
}
