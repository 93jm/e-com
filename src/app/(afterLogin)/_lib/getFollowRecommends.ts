export async function getFollowRecommends() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/followRecommends`, {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/followRecommends`, {
    next: {
      tags: ['users', 'followRecommends'],
    },
    credentials: 'include',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
