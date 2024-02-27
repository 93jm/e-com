import { cookies } from 'next/headers';

export const getUserServer = async ({ queryKey }: { queryKey: [string, string] }) => {
  const [_1, username] = queryKey;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}`, {
    next: {
      tags: ['users', username],
    },
    credentials: 'include',
    //브라우저에 쿠키를 넣으려면 headers통해 next(서버)에서 쿠키를 가져와 직접적으로 넣어야 한다. Prefetch를 위한 코드
    //이 코드는 클라이언트 컴포넌트에서 사용할 수가 없다
    headers: { Cookie: cookies().toString() },
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
