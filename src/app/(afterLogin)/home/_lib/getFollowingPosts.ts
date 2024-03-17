type Props = { pageParam?: number };
export async function getFollowingPosts({ pageParam }: Props) {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/followings?cursor=${pageParam}`, {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/followingPosts?cursor=${pageParam}`, {
    //next에서 담당하는 서버쪽 캐싱
    next: {
      tags: ['posts', 'followings'],
    },
    credentials: 'include',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
