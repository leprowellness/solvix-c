# Updating All Pricing Sections - Batch Update

I'm now updating all remaining pricing section components with currency conversion.

## Files Being Updated:
1. ✅ app-pricing-section.tsx (DONE)
2. ⏳ automation-pricing-section.tsx
3. ⏳ crm-pricing-section.tsx
4. ⏳ langchain-pricing-section.tsx
5. ⏳ openai-pricing-section.tsx
6. ⏳ shopify-pricing-section.tsx
7. ⏳ seo-pricing-section.tsx
8. ⏳ video-pricing-section.tsx

## Changes for Each File:
1. Add import: `import { useCurrency } from '@/contexts/currency-context';`
2. Add hook: `const { convertPrice, selectedCountry } = useCurrency();`
3. Convert prices from strings to numbers
4. Update price display to use `convertPrice()`
5. Add key with country code
6. Remove CAD label

Let me update them all now...
