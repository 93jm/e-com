'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = {
  children: React.ReactNode;
};

const client = new QueryClient({
  defaultOptions: {
    queries: {
      //윈도우가 재 포커싱 되었을때 refetch 실행 여부
      refetchOnWindowFocus: false,
      //API 요청 실패시에 재 시도 옵션 number 횟수 만큼
      retry: false,
    },
  },
});

function RQProvider({ children }: Props) {
  return (
    <QueryClientProvider client={client}>
      {children}
      {/* 리액트 쿼리의 tools를 띄워 놓는 여부 판단 */}
      <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'} />
    </QueryClientProvider>
  );
}

export default RQProvider;
