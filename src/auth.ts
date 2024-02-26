import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';
import cookie from 'cookie';
import { cookies } from 'next/headers';

export const {
  handlers: { GET, POST } /** API 라우트 */,
  auth /** 내가 로그인을 했는지 안했는지 알아내는 함수 */,
  signIn /** 로그인하는 함수 */,
} = NextAuth({
  pages: {
    //회원가입과 로그인시에 어떤 페이지 경로인지 삽입
    signIn: '/i/flow/login',
    newUser: '/i/flow/signup',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        //로그인 수행할때에 아래 부분 호출
        const authResponse = await fetch(`${process.env.AUTH_URL}/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password,
          }),
        });

        //백엔드 서버의 로그인 쿠키를 get 해옴
        let setCookie = authResponse.headers.get('Set-Cookie');

        if (setCookie) {
          //서버로 받아온 쿠키를 객체화시킴
          const parsed = cookie.parse(setCookie);
          //next에서 제공하는 cookies로 브라우저에 쿠키를 심어줌
          cookies().set('connect.sid', parsed['connect.sid'], parsed);

          /**
           * 프론트 서버에는 쿠키를 심으면 안된다
           * 왜냐하면 프론트 서버는 서버이기 때문에 공용이다 여러 브라우저가 프론트 서버를 바라본다
           * 그러기에 개인정보 유출 문제가 있을 수 있어서 브라우저에 쿠키를 심어야 한다
           */
        }

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();
        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
    // KakaoProvider({...})
  ],
});
