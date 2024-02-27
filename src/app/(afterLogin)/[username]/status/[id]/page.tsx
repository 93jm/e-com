import BackButton from '@/app/(afterLogin)/_component/BackButton';
import style from './singlePost.module.css';
import CommentForm from '@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm';
import SinglePost from '@/app/(afterLogin)/[username]/status/[id]/_component/SinglePost';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getSinglePost } from '@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost';
import { getComments } from '@/app/(afterLogin)/[username]/status/[id]/_lib/getComments';
import React from 'react';
import Comments from '@/app/(afterLogin)/[username]/status/[id]/_component/Comments';
import { User } from '@/model/User';
import { Post } from '@/model/Post';
import { getSinglePostServer } from './_lib/getSinglePostServer';
import { getUserServer } from '../../_lib/getUserServer';
import { Metadata } from 'next';

type Props = {
  params: { id: string; username: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const user: User = await getUserServer({ queryKey: ['users', params.username] });
  const post: Post = await getSinglePostServer({ queryKey: ['posts', params.id] });

  return {
    title: `E에서 ${user.nickname} 님 : ${post.content}`,
    description: post.content,
  };
};

export default async function Page({ params }: Props) {
  const { id } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['posts', id], queryFn: getSinglePost });
  await queryClient.prefetchQuery({ queryKey: ['posts', id, 'comments'], queryFn: getComments });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <div className={style.header}>
          <BackButton />
          <h3 className={style.headerTitle}>게시하기</h3>
        </div>
        <SinglePost id={id} />
        <CommentForm id={id} />
        <div>
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
