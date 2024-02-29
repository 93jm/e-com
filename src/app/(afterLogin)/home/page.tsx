import style from './home.module.css';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import TabProvider from '@/app/(afterLogin)/home/_component/TabProvider';
import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
import { Suspense } from 'react';
import TabDeciderSuspense from './_component/TabDeciderSuspense';
import Loading from './loading';
import { auth } from '@/auth';
import { Metadata } from 'next';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPostRecommends } from './_lib/getPostRecommends';
import TabDecider from './_component/TabDecider';

export const metadata: Metadata = {
  title: '홈 / E',
  description: '홈',
};

export default async function Home() {
  const session = await auth();
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
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm me={session} />
          {/* <Suspense fallback={<Loading />}> */}
          <TabDecider />
          {/* <TabDeciderSuspense /> */}
          {/* </Suspense> */}
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
