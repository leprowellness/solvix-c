// Utility to help update pricing sections with currency conversion
// This file documents the changes needed for each pricing component

export const pricingSections = [
  'ai-pricing-section.tsx',
  'app-pricing-section.tsx',
  'automation-pricing-section.tsx',
  'crm-pricing-section.tsx',
  'langchain-pricing-section.tsx',
  'openai-pricing-section.tsx',
  'seo-pricing-section.tsx',
  'shopify-pricing-section.tsx',
];

// Instructions:
// 1. Add import: import { useCurrency } from '@/contexts/currency-context';
// 2. Add hook: const { convertPrice } = useCurrency();
// 3. Replace price displays: ${price} -> {convertPrice(price)}
// 4. For prices with text like '$999', extract number: convertPrice(999)
