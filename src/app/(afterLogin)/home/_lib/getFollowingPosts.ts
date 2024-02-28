type Props = { pageParam?: number };
export async function getFollowingPosts({ pageParam }: Props) {
  const res = await fetch(`http://localhost:9090/api/posts/followings?cursor=${pageParam}`, {
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
