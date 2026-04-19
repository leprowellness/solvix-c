# Debugging Currency Not Updating Issue

## Changes Made to Fix

### 1. Added `useCallback` to Currency Context
- Wrapped `setSelectedCountry` and `convertPrice` in `useCallback`
- Added proper dependencies: `[mounted, selectedCountry]`
- This ensures functions update when country changes

### 2. Added `selectedCountry` to Components
- Added `selectedCountry` to destructuring in all pricing components
- This forces components to re-render when country changes
- Even if not used directly, it creates a dependency

### 3. Added Debug Logs
- Console logs in context when country changes
- Console logs in components when they re-render
- This helps track if updates are happening

## How to Test

### Step 1: Open Browser Console
```
1. Open your browser (Chrome/Firefox/Edge)
2. Press F12 to open Developer Tools
3. Go to "Console" tab
4. Keep it open while testing
```

### Step 2: Load the Website
```bash
cd solvix-c-main
npm run dev
```

Open http://localhost:3000

### Step 3: Watch Console Logs
You should see:
```
Setting country to: United States USD
PricingSection rendering with country: USD
AIPricingSection rendering with country: USD
WebsitePricingSection rendering with country: USD
```

### Step 4: Change Country
1. Click the country selector in navbar (🇺🇸 USD 🌍)
2. Select a different country (e.g., India)
3. Watch the console

You should see:
```
Setting country to: India INR
Converting price: 49 with rate: 83.12
Converting price: 79 with rate: 83.12
PricingSection rendering with country: INR
AIPricingSection rendering with country: INR
WebsitePricingSection rendering with country: INR
```

### Step 5: Check Prices
- Prices should now show in ₹ (Indian Rupees)
- Example: $49 → ₹4,073.88
- Example: $999 → ₹83,120.88

## If Prices Still Don't Update

### Check 1: Is CurrencyProvider Wrapping the App?
Open `app/layout.tsx` and verify:
```typescript
<CurrencyProvider>
  <RootClientWrapper>
    {children}
  </RootClientWrapper>
</CurrencyProvider>
```

### Check 2: Are You on the Right Page?
Only these pages have currency conversion:
- ✅ `/pricing` - Social Media Marketing
- ✅ `/services/ai-solutions` - AI Solutions
- ✅ `/services/web-development` - Web Development
- ❌ Other service pages (not yet updated)

### Check 3: Clear Browser Cache
```
1. Press Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
2. Select "Cached images and files"
3. Click "Clear data"
4. Reload page (Ctrl+R or Cmd+R)
```

### Check 4: Hard Reload
```
1. Press Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. This forces a complete reload
```

### Check 5: Clear localStorage
In browser console, run:
```javascript
localStorage.clear()
location.reload()
```

### Check 6: Check for Errors
In browser console, look for any red error messages:
- "useCurrency must be used within a CurrencyProvider"
- "Cannot read property 'rate' of undefined"
- Any other errors

## Common Issues & Solutions

### Issue 1: "useCurrency must be used within a CurrencyProvider"
**Solution:** Make sure `CurrencyProvider` wraps your app in `layout.tsx`

### Issue 2: Prices show as "$undefined" or "NaN"
**Solution:** Check that price values are numbers, not strings
```typescript
// Wrong:
price: '$999'

// Correct:
price: 999
```

### Issue 3: Country selector doesn't show
**Solution:** Check that `CountrySelector` is in navbar:
```typescript
// In navbar.tsx
import CountrySelector from './country-selector';

// In render:
<CountrySelector />
```

### Issue 4: Prices update but wrong currency symbol
**Solution:** Check country data in `country-selector.tsx`:
```typescript
{ 
  code: 'IN', 
  name: 'India', 
  currency: 'INR', 
  symbol: '₹',  // ← Make sure this is correct
  flag: '🇮🇳', 
  rate: 83.12 
}
```

### Issue 5: Only some prices update
**Solution:** That pricing component hasn't been updated yet. Check `PRICING_SECTIONS_STATUS.md` for which ones are done.

## Manual Testing Checklist

Test each page and country combination:

### Pricing Page (`/pricing`)
- [ ] Select USA → Prices show in $
- [ ] Select India → Prices show in ₹
- [ ] Select UK → Prices show in £
- [ ] Select Japan → Prices show in ¥ (no decimals)
- [ ] Monthly prices update
- [ ] Yearly prices update

### AI Solutions (`/services/ai-solutions`)
- [ ] Select USA → $999, $1,999, $3,999+
- [ ] Select India → ₹83,120, ₹1,66,240, ₹3,32,480+
- [ ] Select UK → £789, £1,579, £3,159+
- [ ] Select Japan → ¥149,401, ¥298,901, ¥597,901+

### Web Development (`/services/web-development`)
- [ ] Select USA → $399-$799, $599-$1,199, $799-$1,199
- [ ] Select India → ₹33,165-₹66,429, ₹49,789-₹99,677, ₹66,429-₹99,677
- [ ] Select UK → £315-£631, £473-£947, £631-£947
- [ ] Tier prices update correctly

## Expected Console Output

### On Page Load:
```
PricingSection rendering with country: USD
Converting price: 49 with rate: 1
Converting price: 79 with rate: 1
Converting price: 129 with rate: 1
```

### After Selecting India:
```
Setting country to: India INR
PricingSection rendering with country: INR
Converting price: 49 with rate: 83.12
Converting price: 79 with rate: 83.12
Converting price: 129 with rate: 83.12
```

### After Selecting Japan:
```
Setting country to: Japan JPY
PricingSection rendering with country: JPY
Converting price: 49 with rate: 149.5
Converting price: 79 with rate: 149.5
Converting price: 129 with rate: 149.5
```

## If Nothing Works

### Nuclear Option - Complete Reset:
```bash
# 1. Stop dev server (Ctrl+C)

# 2. Clear all caches
rm -rf .next
rm -rf node_modules/.cache

# 3. Restart dev server
npm run dev

# 4. In browser:
# - Clear all site data
# - Hard reload (Ctrl+Shift+R)
# - Open in incognito/private window
```

## Success Indicators

You'll know it's working when:
1. ✅ Console shows "Setting country to: [Country] [Currency]"
2. ✅ Console shows "Converting price: [amount] with rate: [rate]"
3. ✅ Console shows "[Component] rendering with country: [Currency]"
4. ✅ Prices on page change to new currency
5. ✅ Currency symbols change ($ → ₹ → £ → ¥)
6. ✅ Number formatting is correct (decimals for USD, none for JPY)

## Still Having Issues?

Check these files are correct:
1. `contexts/currency-context.tsx` - Has useCallback
2. `app/layout.tsx` - Has CurrencyProvider
3. `components/navbar.tsx` - Has CountrySelector
4. `components/country-selector.tsx` - Has all countries
5. `components/pricing-section.tsx` - Uses useCurrency hook
6. `components/ai-pricing-section.tsx` - Uses useCurrency hook
7. `components/website-pricing-section.tsx` - Uses useCurrency hook

All files should have the latest changes from this session.
