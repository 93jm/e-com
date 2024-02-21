import { Suspense } from 'react';
import TabDecider from './TabDecider';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPostRecommends } from '../_lib/getPostRecommends';

export default async function TabDeciderSuspense() {
  const queryClient = new QueryClient();
  //서버 렌더링에서 preFetch가 일어나는 부분이며, 서버쪽에서 인피니티 쿼리를 하고 싶다면 prefetchInfiniteQuery를 사용
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    initialPageParam: 0,
  });
  //preFetch를 해서 서버 렌더링이 완료된 마크업(?)들을 dehydrate 시켜 클라이언트에 전달한다
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <TabDecider />
    </HydrationBoundary>
  );
}
