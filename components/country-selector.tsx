'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import { useCurrency } from '@/contexts/currency-context';
import { Check, Globe, Search, X } from 'lucide-react';

const countries = [
  // North America
  { code: 'US', name: 'United States', currency: 'USD', symbol: '$', flag: '🇺🇸', rate: 1 },
  { code: 'CA', name: 'Canada', currency: 'CAD', symbol: 'C$', flag: '🇨🇦', rate: 1.36 },
  { code: 'MX', name: 'Mexico', currency: 'MXN', symbol: 'MX$', flag: '🇲🇽', rate: 17.25 },
  
  // Europe
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', symbol: '£', flag: '🇬🇧', rate: 0.79 },
  { code: 'EU', name: 'European Union', currency: 'EUR', symbol: '€', flag: '🇪🇺', rate: 0.92 },
  { code: 'CH', name: 'Switzerland', currency: 'CHF', symbol: 'CHF', flag: '🇨🇭', rate: 0.88 },
  { code: 'NO', name: 'Norway', currency: 'NOK', symbol: 'kr', flag: '🇳🇴', rate: 10.87 },
  { code: 'SE', name: 'Sweden', currency: 'SEK', symbol: 'kr', flag: '🇸🇪', rate: 10.63 },
  { code: 'DK', name: 'Denmark', currency: 'DKK', symbol: 'kr', flag: '🇩🇰', rate: 6.87 },
  { code: 'PL', name: 'Poland', currency: 'PLN', symbol: 'zł', flag: '🇵🇱', rate: 4.02 },
  { code: 'CZ', name: 'Czech Republic', currency: 'CZK', symbol: 'Kč', flag: '🇨🇿', rate: 22.85 },
  { code: 'RO', name: 'Romania', currency: 'RON', symbol: 'lei', flag: '🇷🇴', rate: 4.57 },
  { code: 'HU', name: 'Hungary', currency: 'HUF', symbol: 'Ft', flag: '🇭🇺', rate: 355.50 },
  { code: 'TR', name: 'Turkey', currency: 'TRY', symbol: '₺', flag: '🇹🇷', rate: 32.15 },
  { code: 'RU', name: 'Russia', currency: 'RUB', symbol: '₽', flag: '🇷🇺', rate: 92.50 },
  
  // Asia
  { code: 'IN', name: 'India', currency: 'INR', symbol: '₹', flag: '🇮🇳', rate: 83.12 },
  { code: 'CN', name: 'China', currency: 'CNY', symbol: '¥', flag: '🇨🇳', rate: 7.24 },
  { code: 'JP', name: 'Japan', currency: 'JPY', symbol: '¥', flag: '🇯🇵', rate: 149.50 },
  { code: 'KR', name: 'South Korea', currency: 'KRW', symbol: '₩', flag: '🇰🇷', rate: 1329.50 },
  { code: 'SG', name: 'Singapore', currency: 'SGD', symbol: 'S$', flag: '🇸🇬', rate: 1.34 },
  { code: 'HK', name: 'Hong Kong', currency: 'HKD', symbol: 'HK$', flag: '🇭🇰', rate: 7.83 },
  { code: 'TW', name: 'Taiwan', currency: 'TWD', symbol: 'NT$', flag: '🇹🇼', rate: 31.45 },
  { code: 'TH', name: 'Thailand', currency: 'THB', symbol: '฿', flag: '🇹🇭', rate: 35.75 },
  { code: 'MY', name: 'Malaysia', currency: 'MYR', symbol: 'RM', flag: '🇲🇾', rate: 4.72 },
  { code: 'ID', name: 'Indonesia', currency: 'IDR', symbol: 'Rp', flag: '🇮🇩', rate: 15680 },
  { code: 'PH', name: 'Philippines', currency: 'PHP', symbol: '₱', flag: '🇵🇭', rate: 56.25 },
  { code: 'VN', name: 'Vietnam', currency: 'VND', symbol: '₫', flag: '🇻🇳', rate: 24350 },
  { code: 'PK', name: 'Pakistan', currency: 'PKR', symbol: '₨', flag: '🇵🇰', rate: 278.50 },
  { code: 'BD', name: 'Bangladesh', currency: 'BDT', symbol: '৳', flag: '🇧🇩', rate: 109.75 },
  { code: 'LK', name: 'Sri Lanka', currency: 'LKR', symbol: 'Rs', flag: '🇱🇰', rate: 325.50 },
  
  // Middle East
  { code: 'AE', name: 'UAE', currency: 'AED', symbol: 'د.إ', flag: '🇦🇪', rate: 3.67 },
  { code: 'SA', name: 'Saudi Arabia', currency: 'SAR', symbol: 'ر.س', flag: '🇸🇦', rate: 3.75 },
  { code: 'QA', name: 'Qatar', currency: 'QAR', symbol: 'ر.ق', flag: '🇶🇦', rate: 3.64 },
  { code: 'KW', name: 'Kuwait', currency: 'KWD', symbol: 'د.ك', flag: '🇰🇼', rate: 0.31 },
  { code: 'BH', name: 'Bahrain', currency: 'BHD', symbol: 'د.ب', flag: '🇧🇭', rate: 0.38 },
  { code: 'OM', name: 'Oman', currency: 'OMR', symbol: 'ر.ع', flag: '🇴🇲', rate: 0.38 },
  { code: 'IL', name: 'Israel', currency: 'ILS', symbol: '₪', flag: '🇮🇱', rate: 3.65 },
  { code: 'EG', name: 'Egypt', currency: 'EGP', symbol: 'E£', flag: '🇪🇬', rate: 48.75 },
  
  // Oceania
  { code: 'AU', name: 'Australia', currency: 'AUD', symbol: 'A$', flag: '🇦🇺', rate: 1.53 },
  { code: 'NZ', name: 'New Zealand', currency: 'NZD', symbol: 'NZ$', flag: '🇳🇿', rate: 1.65 },
  
  // South America
  { code: 'BR', name: 'Brazil', currency: 'BRL', symbol: 'R$', flag: '🇧🇷', rate: 4.98 },
  { code: 'AR', name: 'Argentina', currency: 'ARS', symbol: '$', flag: '🇦🇷', rate: 825.50 },
  { code: 'CL', name: 'Chile', currency: 'CLP', symbol: '$', flag: '🇨🇱', rate: 975.50 },
  { code: 'CO', name: 'Colombia', currency: 'COP', symbol: '$', flag: '🇨🇴', rate: 3925 },
  { code: 'PE', name: 'Peru', currency: 'PEN', symbol: 'S/', flag: '🇵🇪', rate: 3.75 },
  
  // Africa
  { code: 'ZA', name: 'South Africa', currency: 'ZAR', symbol: 'R', flag: '🇿🇦', rate: 18.65 },
  { code: 'NG', name: 'Nigeria', currency: 'NGN', symbol: '₦', flag: '🇳🇬', rate: 1545 },
  { code: 'KE', name: 'Kenya', currency: 'KES', symbol: 'KSh', flag: '🇰🇪', rate: 129.50 },
  { code: 'MA', name: 'Morocco', currency: 'MAD', symbol: 'د.م.', flag: '🇲🇦', rate: 10.15 },
];

export default function CountrySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { selectedCountry, setSelectedCountry } = useCurrency();

  useEffect(() => {
    // Show modal on first visit only (after splash screen)
    const hasSelectedCountry = localStorage.getItem('selectedCountry');
    if (!hasSelectedCountry) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 3500); // Show 500ms after splash screen ends
      
      return () => clearTimeout(timer);
    }
  }, []);

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return countries;
    
    const query = searchQuery.toLowerCase();
    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(query) ||
        country.currency.toLowerCase().includes(query) ||
        country.code.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleCountrySelect = (country: typeof countries[0]) => {
    setSelectedCountry(country);
    localStorage.setItem('selectedCountry', JSON.stringify(country));
    setIsOpen(false);
    setShowModal(false);
    setSearchQuery('');
  };

  return (
    <>
      {/* Country selector button */}
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-purple-500 transition-colors"
        >
          <span className="text-2xl">{selectedCountry.flag}</span>
          <span className="text-sm font-medium text-gray-300">{selectedCountry.currency}</span>
          <Globe className="w-4 h-4 text-gray-400" />
        </motion.button>

        {/* Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
              />
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 max-h-[500px] overflow-hidden flex flex-col"
              >
                {/* Search bar */}
                <div className="p-3 border-b border-gray-700">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search country or currency..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-8 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                      autoFocus
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Countries list */}
                <div className="overflow-y-auto">
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                      <button
                        key={country.code}
                        onClick={() => handleCountrySelect(country)}
                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{country.flag}</span>
                          <div className="text-left">
                            <p className="text-sm font-medium text-white">{country.name}</p>
                            <p className="text-xs text-gray-400">{country.symbol} {country.currency}</p>
                          </div>
                        </div>
                        {selectedCountry.code === country.code && (
                          <Check className="w-5 h-5 text-purple-500" />
                        )}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-8 text-center text-gray-500">
                      No countries found
                    </div>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Initial country selection modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/30 rounded-2xl p-4 sm:p-6 md:p-8 max-w-4xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="text-center mb-4 sm:mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="inline-block mb-3 sm:mb-4"
                >
                  <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-purple-500" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Select Your Country</h2>
                <p className="text-sm sm:text-base text-gray-400">Choose your location to see prices in your local currency</p>
              </div>

              {/* Search bar in modal */}
              <div className="mb-3 sm:mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search country or currency..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-10 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Countries grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 overflow-y-auto flex-1">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <motion.button
                      key={country.code}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleCountrySelect(country)}
                      className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-purple-500 rounded-lg transition-all text-left"
                    >
                      <span className="text-2xl sm:text-3xl">{country.flag}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-white truncate">{country.name}</p>
                        <p className="text-xs text-gray-400">{country.symbol} {country.currency}</p>
                      </div>
                    </motion.button>
                  ))
                ) : (
                  <div className="col-span-full py-8 sm:py-12 text-center text-gray-500 text-sm sm:text-base">
                    No countries found matching "{searchQuery}"
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
