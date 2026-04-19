'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { use } from 'react';

export default function EditPortfolioWrapper({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id: portfolioId } = use(params);

  useEffect(() => {
    if (portfolioId) {
      router.push(`/admin/portfolio/add?id=${portfolioId}`);
    }
  }, [portfolioId, router]);

  return null;
}
