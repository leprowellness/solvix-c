import { Suspense } from 'react';
import { AdminPortfolioFormContent } from './form-content';

export default function AdminPortfolioAddPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <AdminPortfolioFormContent />
    </Suspense>
  );
}
