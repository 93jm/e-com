import style from './home.module.css';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import TabProvider from '@/app/(afterLogin)/home/_component/TabProvider';
import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPostRecommends } from './_lib/getPostRecommends';
import PostRecommends from './_component/PostRecommends';

export default async function Home() {
  const queryClient = new QueryClient();
  //서버 렌더링에서 preFetch가 일어나는 부분
  await queryClient.prefetchQuery({ queryKey: ['posts', 'recommends'], queryFn: getPostRecommends });
  //preFetch를 해서 서버 렌더링이 완료된 마크업(?)들을 dehydrate 시켜 클라이언트에 전달한다
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <PostRecommends />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
