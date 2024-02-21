'use client';

import { InfiniteData, useInfiniteQuery, useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getPostRecommends } from '../_lib/getPostRecommends';
import Post from '../../_component/Post';
import { Post as IPost } from '@/model/Post';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function PostRecommends() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isPending,
    isLoading, // isPending && isFetching
    isError,
  } = useSuspenseInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string], number>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    //60000ms = 1min 동안 데이터는 Fresh 상태인걸로 설정
    staleTime: 60 * 1000,
    //Inactive 상태일때에 gcTime이 동작한다 (기본으로 5분) 5분뒤에는 메모리에서 정리가 된다
    //gcTime은 항상 stateTime보다 시간이 길어야 한다
    gcTime: 300 * 1000,
    //인피니티 스크롤링 페이지 param
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
  });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isError) {
    return '에러 처리해줘';
  }

  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map((post) => (
            <Post key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: 50 }} />
    </>
  );
}
