import { http, HttpResponse } from 'msw';

const User = [
  {
    userId: 1,
    nickname: 'evan' /** 에덴 << 으로 입력하면 cookie가 안쌓임 */,
    id: 'evan',
    image: '/ecom.png',
  },
];

export const handlers = [
  http.post('/api/login', () => {
    console.log('로그인 한다');
    return HttpResponse.json(User[0], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
      },
    });
  }),
  http.post('/api/logout', () => {
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    });
  }),
  http.post('/api/users', async ({ request }) => {
    console.log('회원가입 한다');
    // 유저 이미 존재하는 return 용
    // return HttpResponse.text(JSON.stringify('user_exists'), {
    //   status: 403,
    // })
    return HttpResponse.text(JSON.stringify('ok'), {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0',
      },
    });
  }),
];
