'use client';

import { useQuery } from '@tanstack/react-query';
import { getPostRecommends } from '../_lib/getPostRecommends';
import Post from '../../_component/Post';
import { Post as IPost } from '@/model/Post';

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    //60000ms = 1min 동안 데이터는 Fresh 상태인걸로 설정
    staleTime: 60 * 1000,
    //Inactive 상태일때에 gcTime이 동작한다 (기본으로 5분) 5분뒤에는 메모리에서 정리가 된다
    //gcTime은 항상 stateTime보다 시간이 길어야 한다
    gcTime: 300 * 1000,
  });
  return (
    <>
      {data?.map((post) => {
        return <Post key={post.postId} post={post} />;
      })}
    </>
  );
}
