'use client';

import { useEffect } from 'react';

export const MSWComponent = () => {
  useEffect(() => {
    //wiondow가 undefined가 아니어야 브라우저 환경이 된 상태
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        require('@/mocks/browser');
      }
    }
  }, []);

  return null;
};
