import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';

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
        console.log('credentials >> ', credentials);
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

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();
        console.log('user >> ', user);
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
